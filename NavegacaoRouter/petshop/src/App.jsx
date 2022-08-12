import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';

function App() {
// exect impede que a '/' seja considerada no '/sobre';
// para o React procurar SÓ UMA ROTA, usamos o componente Switch;
  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/sobre'>
          <Sobre />
        </Route>

        <Route>
          <Pagina404 />
        </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
