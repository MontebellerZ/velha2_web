import type { Jogador } from "../../types/Jogador";
import ComoJogarBtn from "./ComoJogarBtn";
// import DesfazerBtn from "./DesfazerBtn";
import PlacarBtn from "./Placar";
// import ReiniciarBtn from "./ReiniciarBtn";
import RenomearBtn from "./RenomearBtn";

interface ControlesProps {
  onDesfazer: () => void;
  onReiniciar: () => void;
  onRenomear: () => void;
  resultados: {
    player1: Jogador;
    player2: Jogador;
    empates: number;
  };
}

function Controles(props: ControlesProps) {
  return (
    <div>
      <RenomearBtn onRenomear={props.onRenomear} />
      {/* <ReiniciarBtn onReiniciar={props.onReiniciar} /> */}
      <PlacarBtn />
      {/* <DesfazerBtn onDesfazer={props.onDesfazer} /> */}
      <ComoJogarBtn />
    </div>
  );
}

export default Controles;
