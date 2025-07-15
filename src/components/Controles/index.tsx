import { FaArrowRotateLeft, FaPencil } from "react-icons/fa6";
import ControlesBtn from "./ControlesBtn";
import { FaArrowLeft, FaQuestion } from "react-icons/fa";

interface ControlesProps {
  onDesfazer: () => void;
  onReiniciar: () => void;
  onRenomear: () => void;
  onComoJogar: () => void;
}

function Controles(props: ControlesProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <ControlesBtn onClick={props.onRenomear} title="Renomear">
        <FaPencil />
      </ControlesBtn>

      <ControlesBtn onClick={props.onReiniciar} title="Reiniciar">
        <FaArrowRotateLeft />
      </ControlesBtn>

      <ControlesBtn onClick={props.onDesfazer} title="Desfazer jogada">
        <FaArrowLeft />
      </ControlesBtn>

      <ControlesBtn onClick={props.onComoJogar} title="Como jogar">
        <FaQuestion />
      </ControlesBtn>
    </div>
  );
}

export default Controles;
