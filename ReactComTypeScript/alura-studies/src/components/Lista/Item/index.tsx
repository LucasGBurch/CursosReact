import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {
  /* console.log("Item atual: ", { tarefa, tempo, selecionado, completado, id }); // console para ler os dados e o id criado pelo v4 (uuid) importado no formulário! desabilitado ao final da aula 6  */
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa( // Executa se/quando não estiver completado
      { // Mas ignora se estiver, por isso o ! e o &&
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      }
    )}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  ); // A estilização de completa entra junto com o momento que completado for true;
}
