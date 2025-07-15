import { v4 as uuidv4 } from "uuid";
import type { Jogador } from "../types/Jogador";

const DEFAULT_COR_P1 = "#008fd1";
const DEFAULT_COR_P2 = "#dd6e6e";

function getJogadorPadrao(playerNumber?: number): Jogador {
  return {
    id: uuidv4(),
    nome: playerNumber ? `Jogador ${playerNumber}` : "Jogador",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    cor: playerNumber === 1 ? DEFAULT_COR_P1 : DEFAULT_COR_P2,
  };
}

export default getJogadorPadrao;
