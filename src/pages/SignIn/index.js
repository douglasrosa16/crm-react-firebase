import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

import { AuthContext } from '../../contexts/authContext';

import logo from '../../assets/unisystem.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    signIn(email, password)
  }

  return (
    <div className="container">
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="Logo do Sistema" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type="text" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="informe uma senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">{loadingAuth? 'Carregando' : 'Acessar'}</button>
          </form>
          <div className="login-senha">
            <Link to="/register">Criar uma conta</Link>
            <Link to="/recuperar-senha">Esqueceu a senha?</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SignIn;
