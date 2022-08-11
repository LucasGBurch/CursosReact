import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
// exect impede que a '/' seja considerada no '/sobre';
// para o React procurar SÓ UMA ROTA, usamos o componente Switch
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/sobre'>
          <Sobre />
        </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
