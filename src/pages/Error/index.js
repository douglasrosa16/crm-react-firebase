import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

import logo from '../../assets/unisystem.png';

function Error() {
 

  return (
    <div className="container">
      <div className="container-center">
        <div className="login">
          <div className="login-area">
          </div>
            <h1>Página não encontrada</h1>           
          <div className="login-senha">
            <Link to="/register">Cadastre-se</Link>
            <Link to="/">Login</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Error;
