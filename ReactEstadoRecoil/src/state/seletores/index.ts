import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todosOsEventos = get(listaDeEventosState)

    const eventos = todosOsEventos.filter(evento => {
      if (!filtro.data) {
        return true
      }
      // "2022-01-31..." os dez primeiros caracteres ISO com slice:
      const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)

      return ehOMesmoDia; // retorna a condição booleana para filtro;
    });
    return eventos
  }
})

