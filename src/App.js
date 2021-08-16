import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/authContext';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    //Todas as rotas estão dentro do AuthProvider
    <AuthProvider> 
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
