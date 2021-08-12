import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';
//AULA 86

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}){

  const { signed, loading } = useContext(AuthContext);

  //Se estiver carregando
  if(loading){
    console.log('entrou')
    return (
      <div>Carregando</div>
    )
  }

  //Se não está logado e a rota é privada
  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="dashboard" />
  }

  return (
    <Route 
      {...rest}
      render={props => <Component {...props} />}
    />
  )
}