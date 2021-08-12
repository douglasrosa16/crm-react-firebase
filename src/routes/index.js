import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DefinePassword from '../pages/DefinePassword';
import Error from '../pages/Error';


import Dashboard from '../pages/Dashboard';

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />      
      <Route exact path="/recuperar-senha" component={DefinePassword} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />      
      
      <Route path="*" component={Error}/>
    </Switch>
  )
}