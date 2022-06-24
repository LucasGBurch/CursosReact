import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  /* console.log('conversão: ', tempoParaSegundos('01:01:01')); 
  teste da conversão de time*/
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) { // "se o selecionado existe"
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado]) // re-renderiza o selecionado sempre que mudar!!
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  );
}
