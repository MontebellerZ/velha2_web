import type { Jogador } from "../../types/Jogador";
import PlacarJogador from "./PlacarJogador";

export interface PlacarProps {
  player1: Jogador;
  player2: Jogador;
  empates: number;
  vitoriasP1: number;
  vitoriasP2: number;
}

function Placar(props: PlacarProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-0.5 text-center font-bold max-w-full overflow-hidden">
      <PlacarJogador
        nome={props.player1.nome}
        marcador={props.vitoriasP1}
        cor={props.player1.cor}
        ajustado
      />
      <PlacarJogador marcador={props.empates} ajustado />
      <PlacarJogador
        nome={props.player2.nome}
        marcador={props.vitoriasP2}
        cor={props.player2.cor}
        ajustado
        reverter
      />
    </div>
  );
}

export default Placar;
