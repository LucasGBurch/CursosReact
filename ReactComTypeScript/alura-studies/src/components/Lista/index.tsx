import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
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
