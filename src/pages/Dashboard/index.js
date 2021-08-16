import { useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';

import Header from '../../components/Header';

export default function Dashboard(){

  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Página de Dashboard</h1>
      <button onClick={() => signOut}>Sair</button>
    </div>
  )
}

//Aula 94