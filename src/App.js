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
<<<<<<< HEAD
import SingleAluguel from './pages/SingleAluguel/SingleAluguel';
import SingleCompartilhar from './pages/SingleCompartilhar/SingleCompartilhar';
=======
>>>>>>> f727dbf641d03289334fdc51e9ec1dcf336004ab

function App() {

  const {user} = useContext(Context);

  return (
      <BrowserRouter>
        <Switch> 
          <Route path="/" component={ user ? Venda : Login} exact />
          <Route path="/desapego" component={ user ? Desapego : Login} exact />
          <Route path="/habitacao/aluguel" component={ user ? Aluguel : Login} exact />
<<<<<<< HEAD
          <Route path="/habitacao/aluguel/:id" component={ user ? SingleAluguel : Login} exact />
          <Route path="/habitacao/aluguel/cadastrar" component={ user ? CadastrarAluguel : Login} exact />
          <Route path="/habitacao/compartilhar" component={ user ? Compartilhar : Login} exact />
          <Route path="/habitacao/compartilhar/:id" component={ user ? SingleCompartilhar : Login} exact />
=======
          <Route path="/habitacao/aluguel/cadastrar" component={ user ? CadastrarAluguel : Login} exact />
          <Route path="/habitacao/compartilhar" component={ user ? Compartilhar : Login} exact />
>>>>>>> f727dbf641d03289334fdc51e9ec1dcf336004ab
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