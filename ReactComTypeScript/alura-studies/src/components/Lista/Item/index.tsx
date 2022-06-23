import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
  console.log("Item atual: ", { tarefa, tempo, selecionado, completado, id }); // console para ler os dados e o id criado pelo v4 (uuid) importado no formulário!
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
