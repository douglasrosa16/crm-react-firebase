import { useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';

export default function Dashboard(){

  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <h1>Página de Dashboard</h1>
      <button onClick={() => signOut}>Sair</button>
    </div>
  )
}

//Aula 91