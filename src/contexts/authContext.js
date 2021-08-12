import { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

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

  return (
                                 //Converte para booleano
    <AuthContext.Provider value={{ signed: !!user, user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}