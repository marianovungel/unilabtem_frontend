import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'

function App() {
  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/venda" element={<Venda />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;