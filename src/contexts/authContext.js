import { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export default function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  //Quando a aplicação abre
  useEffect(() =>{

    function loadStorage(){
      // const obj = {
      //   id: 1,
      //   nome: 'Douglas'
      // }
      // localStorage.setItem('@crmuser',obj)
      localStorage.clear();
      const storageUser = localStorage.getItem('@crmuser');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    
    loadStorage();
  }, []);

  async function signIn(email, password){
    setLoadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('users')
      .doc(uid).get();
      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        avatarUrl: userProfile.data().avatarUrl,
        email: value.user.email
      };
      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success('Bem vindo a plataforma!')      
    })
    .catch((error) => {
      toast.error('Algo deu errado')
      console.log(error);
      setLoadingAuth(false);
    })
  }

  async function signUp(email, password, nome){
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value)=>{
      let uid = value.user.uid;
      //Cadastrar usuário no banco
      await firebase.firestore().collection('users')
      .doc(uid).set({
        nome: nome,
        avatarUrl: null,
      })
      .then(() => {
        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email,
          avatarUrl: null
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success('Bem vindo a plataforma!')
      })
    })
    .catch((error) => {
      toast.error('Algo deu errado!')
      console.log('Ocorreu um erro:'+error);
      setLoadingAuth(false);
    })
  }

  function storageUser(data){
    localStorage.setItem('@crmuser',JSON.stringify(data))
  }

  async function signOut(){
    await firebase.auth.signOut();
    localStorage.removeItem('@crmuser');
    setUser(null);
  }

  return (
                                 //Converte para booleano
    <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signOut, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}