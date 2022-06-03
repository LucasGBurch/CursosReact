import React from "react";
import Formulario from '../components/Formulario/index.tsx';
import Lista from "../components/Lista/index.tsx";
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
