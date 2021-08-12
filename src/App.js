import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/authContext';
import Routes from './routes';

function App() {
  return (
    //Todas as rotas estão dentro do AuthProvider
    <AuthProvider> 
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
