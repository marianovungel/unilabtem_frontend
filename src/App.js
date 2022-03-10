import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'
import SingleVenda from './pages/SingleVenda/SingleVenda';

function App() {

  const {user} = useContext(Context);

  return (
      <BrowserRouter>
        <Switch> 
          <Route path="/" component={ user ? Venda : Login} exact />
          <Route path="/post/:id" component={SingleVenda} />
          <Route path="/login" component={Login} />
          <Route path="/registrar" component={Registrar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;