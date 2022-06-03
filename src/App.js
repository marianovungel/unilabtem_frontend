import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'
import SingleVenda from './pages/SingleVenda/SingleVenda';
import SingleDesapego from './pages/SingleDesapego/SingleDesapego';
import Desapego from './pages/Desapego/Desapego';
import Aluguel from './pages/Aluguel/Aluguel';
import Compartilhar from './pages/Compartilhar/Compartilhar';
import CadastrarAluguel from './pages/CadastrarAluguel/CadastrarAluguel';
import CadastrarCompartilhar from './pages/CadastrarCompartilhar/CadastrarCompartilhar';

function App() {

  const {user} = useContext(Context);

  return (
      <BrowserRouter>
        <Switch> 
          <Route path="/" component={ user ? Venda : Login} exact />
          <Route path="/desapego" component={ user ? Desapego : Login} exact />
          <Route path="/habitacao/aluguel" component={ user ? Aluguel : Login} exact />
          <Route path="/habitacao/aluguel/cadastrar" component={ user ? CadastrarAluguel : Login} exact />
          <Route path="/habitacao/compartilhar" component={ user ? Compartilhar : Login} exact />
          <Route path="/habitacao/compartilhar/cadastrar" component={ user ? CadastrarCompartilhar : Login} exact />
          <Route path="/post/:id" component={user ? SingleVenda  : Login} />
          <Route path="/desapego/:id" component={user ? SingleDesapego  : Login} />
          <Route path="/login" component={Login} />
          <Route path="/registrar" component={Registrar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;