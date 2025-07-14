import { useState } from "react";
import ComoJogarResumido from "./ComoJogarResumido";
import ComoJogarDetalhado from "./ComoJogarDetalhado";
import SwitchAbas from "./SwitchAbas";
import type { Abas } from "../../types/Abas";

const ABAS_OPT: Abas[] = [
  { label: "Resumido", value: <ComoJogarResumido /> },
  { label: "Detalhado", value: <ComoJogarDetalhado /> },
];

function ComoJogar() {
  const [aba, setAba] = useState(ABAS_OPT[0]);

  const changeResumir = (opcao: Abas) => {
    setAba(opcao);
  };

  return (
    <div className="text-center flex flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-bold text-accent">🧠 Jogo da velha 2.0</h2>

      <h3 className="text-lg font-bold text-accent">Como Jogar</h3>

      <SwitchAbas selectAba={changeResumir} abas={ABAS_OPT} />

      {aba.value}
    </div>
  );
}

export default ComoJogar;
