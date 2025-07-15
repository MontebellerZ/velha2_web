import { v4 as uuidv4 } from "uuid";
import type { Jogador } from "../types/Jogador";

function getJogadorPadrao(): Jogador {
  return {
    id: uuidv4(),
    nome: "",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
  };
}

export default getJogadorPadrao;
