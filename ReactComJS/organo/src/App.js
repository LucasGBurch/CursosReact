import { useState } from 'react';
import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario/index';
// o index costuma ser pego direto da pasta, sem declarar, mas prefiro deixar visível.

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  } // espalha o array num novo com o colaborador recém cadastrado

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
};

export default App;
