import './Formulario.css';
import CampoTexto from '../CampoTexto/index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  // Assim, atribuímos valores usando setValores do useState!! Pro React renderizar

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome, //igual a nome: nome etc...
      cargo,
      imagem,
      time,
    });
    // Limpando formulário após cadastro:
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          itens={props.times}
          label="Time"
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
