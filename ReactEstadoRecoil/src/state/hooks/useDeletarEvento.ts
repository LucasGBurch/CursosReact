import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useDeletarEvento = () => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {

    // listaAntiga desestruturada para criar uma nova com o filter à qual os ids de evento são diferentes do passado, que será excluído
    setListaDeEventos((listaAntiga) => [
      ...listaAntiga.filter(evt => evento.id !== evt.id)
    ]);
  };
};

export default useDeletarEvento;
