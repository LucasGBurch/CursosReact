import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import React, { SetStateAction, useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome; 
    // Se houver ordenador e o valor ser igual ao selecionado, pega seu nome. Senão o span usa "Ordenar Por", logo abaixo do botão
  return (
    <button
      className={classNames({
        [styles.ordenador]: true, // Quando não estiver ativo:
        [styles["ordenador--ativo"]]: ordenador !== "",
      })} // Se estiver, volta ao normal pela string vazia
      // !aberto para fechar/abrir
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
      // Ao clicar fora do botão, fecha
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
