import { useState } from 'react';
import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario/index';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
// o index costuma ser pego direto da pasta, sem declarar;

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // Aqui era de imprimir array: console.log(colaborador);
    // Para debugar, digitar 'debugger' e rodar com F12 aberto na página
    setColaboradores([...colaboradores, colaborador]);
  } // espalha o array num novo com o colaborador recém cadastrado

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome} // nome e cores do objeto de times
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        
        //Estado de colaboradores, o filter vai registrar o colaborador somente ao time correspondente.
      /> )}

      <Rodape />
    </div>
  );
};

export default App;
