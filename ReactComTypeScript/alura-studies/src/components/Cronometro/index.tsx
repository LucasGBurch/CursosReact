import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  /* console.log('conversão: ', tempoParaSegundos('01:01:01')); 
  teste da conversão de time*/
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) { // "se o selecionado existe"
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado]) // re-renderiza o selecionado sempre que mudar!!

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1); // RECURSIVIDADE
      } // Vai decrementando 1 segundo de cada vez até ficar ZERO!!
      finalizarTarefa(); // Para quando zerar.
    }, 1000); // mil ms (1s) para tirar um segundo na contagem regressiva
  } // isso SE o contador for maior que 0

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  );
}
