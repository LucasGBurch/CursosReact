import Colaborador from '../Colaborador';
import './Time.css';

// Dumb Component: componente sem comportamento
const Time = (props) => {

  const css = { backgroundColor:props.corSecundaria };
  const borda = { borderColor:props.corPrimaria };

  return ( // Retorna SÓ DE length > 0, ou seja, se tiver colaborador cadastrado nesse time!!
  // É um ternário diferente, dava para colocar a condição entre parênteses, usar o ? em vez do && e no final : ''
    props.colaboradores.length > 0 && <section className='time' style={css}>
      <h3 style={borda}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador
          corDeFundo={props.corPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        /> )}
      </div>
    </section>
  );
};

export default Time;

