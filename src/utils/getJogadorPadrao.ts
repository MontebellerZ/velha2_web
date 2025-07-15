import { v4 as uuidv4 } from "uuid";
import type { Jogador } from "../types/Jogador";

const DEFAULT_P1: Jogador = {
  id: "",
  nome: "Jogador 1",
  vitorias: 0,
  derrotas: 0,
  empates: 0,
  cor: "#008fd1",
};

const DEFAULT_P2: Jogador = {
  id: "",
  nome: "Jogador 2",
  vitorias: 0,
  derrotas: 0,
  empates: 0,
  cor: "#dd6e6e",
};

function getJogadorPadrao(playerNumber?: number): Jogador {
  return {
    ...(playerNumber === 1 ? DEFAULT_P1 : DEFAULT_P2),
    id: uuidv4(),
  };
}

export default getJogadorPadrao;
