import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";
import { OpcoesOrdenador } from "../Ordenador";

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: OpcoesOrdenador;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i'); // i de case insensitive;
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch(ordenador) {
      case 'porcao': 
        return ordenarPropriedadeCrescente(novaLista, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedadeCrescente(novaLista, 'serving');
      case 'preco':
        return ordenarPropriedadeCrescente(novaLista, 'price');
      default:
        return novaLista;
    }
  } // com base no json de opções da pasta Ordenador

  // Uma das soluções de método no penúltimo exercício:
  const ordenarPropriedadeCrescente = (
    lista: typeof cardapio, // Achei o tipo auxiliar Pick mais preciso para solução, porque vai direto no array do json!!
    propriedade: keyof Pick<typeof cardapio[0], 'size' | 'serving' | 'price'>
  ) => { // sort((item1, item2)) vai ordenando eles:
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item
          key={item.id} // passa o mouse em item pra entender o spread
          {...item}
        />
      ))}
    </div>
  );
}
