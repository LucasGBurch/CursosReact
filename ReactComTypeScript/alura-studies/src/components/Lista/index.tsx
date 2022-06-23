import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }] // Array a ser percorrido pelo map() com arrow function:
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
            <Item
              key={index} // key é para linkar o <li> com o DOM
              {...item} 
              /* destructuring em tarefa e tempo
              Para um componente muito maior, é recomendável fazer:
              tarefa={item.tarefa} e tempo={item.tempo}
              caso só queira importar alguns específicos */
            />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
