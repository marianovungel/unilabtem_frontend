import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'

function App() {

  const {user} = useContext(Context);

  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={ user ? <Registrar /> : <Login /> } />
          <Route path="/venda" element={ user ? <Venda /> : <Login />} />
          <Route path="/registrar" element={ user ? <Login /> : <Registrar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;