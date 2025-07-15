import { useMemo, useState } from "react";
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

  const destaquePos = useMemo(() => {
    const index = props.abas.indexOf(selected);
    const abas = props.abas.length;
    return { left: (index / abas) * 100, right: ((index + 1) / abas) * -100 + 100 };
  }, [selected, props.abas]);

  return (
    <div className="relative flex items-center justify-center rounded-full bg-deep">
      <div
        className={`absolute h-full bg-softLight z-0 rounded-full transition-all shadow-sm`}
        style={{ left: `${destaquePos.left}%`, right: `${destaquePos.right}%` }}
      />

      <div
        className="grid gap-0 z-10 text-sm justify-evenly w-full"
        style={{ gridTemplateColumns: `repeat(${props.abas.length}, 1fr)` }}
      >
        {props.abas.map((aba, i) => (
          <button
            key={i}
            onClick={() => changeSelection(aba)}
            className="flex-1 px-4 py-1 text-center"
          >
            {aba.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SwitchAbas;
