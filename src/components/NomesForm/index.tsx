import { useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { toast } from "react-toastify";

interface NomesFormProps {
  player1?: string;
  player2?: string;
  onSubmit: (player1: string, player2: string) => void;
  onClose: () => void;
}

function NomesForm(props: NomesFormProps) {
  const [p1, setP1] = useState(props.player1 || "");
  const [p2, setP2] = useState(props.player2 || "");

  const closeForm = () => {
    props.onClose();
  };

  const submitNomes = (e: React.FormEvent) => {
    e.preventDefault();

    if (!p1 || !p2) {
      toast("Por favor, preencha os nomes dos jogadores.");
      return;
    }

    props.onSubmit(p1.trim(), p2.trim());

    closeForm();
  };

  const inputs = useMemo(
    () => [
      { p: p1, set: setP1 },
      { p: p2, set: setP2 },
    ],
    [p1, p2]
  );

  return (
    <form
      className="text-center flex flex-col items-center justify-center gap-4"
      onSubmit={submitNomes}
    >
      <h2 className="text-lg font-bold text-accent">Jogadores</h2>

      {inputs.map(({ p, set }, i) => (
        <label
          key={i}
          className="flex flex-col gap-1 items-center justify-center text-primary font-medium"
        >
          <p>Jogador {i + 1}</p>
          <input
            type="text"
            className="text-center border border-accentDark rounded-md bg-accentLight text-primaryDark font-medium"
            placeholder={`Nome do Jogador ${i + 1}`}
            onChange={(e) => set(e.target.value)}
            value={p}
            maxLength={15}
          />
        </label>
      ))}

      <button
        className="flex gap-1 items-center justify-center bg-soft px-4 py-1 rounded-lg text-deepDark mt-4 font-medium border border-soft hover:bg-softLight hover:border-deepDark transition"
        type="submit"
      >
        <p>Iniciar Jogo</p>
        <FaPlay />
      </button>
    </form>
  );
}

export default NomesForm;
