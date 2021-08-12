import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

import logo from '../../assets/unisystem.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');


  function handleSubmit(e){
    e.preventDefault();
    alert('Clicou')
  }

  return (
    <div className="container">
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="Logo do Sistema" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input type="text" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="informe uma senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Cadastrar</button>
          </form>
          <div className="login-senha">
            <Link to="/">Já tem uma conta? Entre</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;
