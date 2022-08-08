import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

  

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value} >
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  ); 
};

/* Um só comando assim pode ficar na mesma linha, sem { return };

map(array) é uma iteração para uma lista de itens para criar option para cada um desses itens da lista; a diferença com o forEach é que o map efetivamente transforma a lista, além de iterar;

Usamos o próprio nome do item como Chave Única! A "key";

Dá pra usar adicionando um index em vez do item na key, só que para casos de remover/atualizar o número de index poderia gerar problemas, embora em alguns casos funcione!
*/

export default ListaSuspensa;
