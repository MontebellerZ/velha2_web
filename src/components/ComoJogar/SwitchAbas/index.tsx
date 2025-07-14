import { useState } from "react";
import type { Abas } from "../../../types/Abas";

interface SwitchAbasProps {
  selectAba: (value: Abas) => void;
  abas: Abas[];
}

function SwitchAbas(props: SwitchAbasProps) {
  const [selected, setSelected] = useState(props.abas[0]);

  const changeSelection = (aba: Abas) => {
    setSelected(aba);
    props.selectAba(aba);
  };

  return (
    <div className="flex items-center justify-center">
      <div />

      {props.abas.map((aba, i) => (
        <button key={i} onClick={() => changeSelection(aba)}>
          {aba.label}
        </button>
      ))}
    </div>
  );
}

export default SwitchAbas;
