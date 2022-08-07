import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario/index';
// o index costuma ser pego direto da pasta, sem declarar, mas prefiro deixar visível.

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
};

export default App;
