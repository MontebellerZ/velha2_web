import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { toast } from "react-toastify";
import { useModal } from "../../contexts/useModal";

interface NomesFormProps {
  player1?: string;
  player2?: string;
  onSubmit: (player1: string, player2: string) => void;
  onClose: () => void;
}

function NomesForm(props: NomesFormProps) {
  const { closeModal } = useModal();

  const [p1, setP1] = useState(props.player1 || "");
  const [p2, setP2] = useState(props.player2 || "");

  const closeForm = () => {
    props.onClose();
    closeModal();
  };

  const submitNomes = (e: React.FormEvent) => {
    e.preventDefault();

    if (!p1 || !p2) {
      toast("Por favor, preencha os nomes dos jogadores.");
      return;
    }

    props.onSubmit(p1, p2);

    closeForm();
  };

  return (
    <form
      className="text-center flex flex-col items-center justify-center gap-4"
      onSubmit={submitNomes}
    >
      <h2 className="text-lg font-bold text-accent">Jogadores</h2>

      <label className="flex flex-col gap-1 items-center justify-center text-primary font-medium">
        <p>Jogador 1</p>
        <input
          type="text"
          className="text-center border border-accentDark rounded-md bg-accentLight text-primaryDark font-medium"
          placeholder="Nome do Jogador 1"
          onChange={(e) => setP1(e.target.value)}
          value={p1}
        />
      </label>

      <label className="flex flex-col gap-1 items-center justify-center text-primary font-medium">
        <p>Jogador 2</p>
        <input
          type="text"
          className="text-center border border-accentDark rounded-md bg-accentLight text-primaryDark font-medium"
          placeholder="Nome do Jogador 2"
          onChange={(e) => setP2(e.target.value)}
          value={p2}
        />
      </label>

      <button
        className="flex gap-1 items-center justify-center bg-soft px-4 py-1 rounded-lg text-deepDark mt-4 font-medium border border-soft hover:bg-softLight hover:border-deepDark transition"
        type="submit"
      >
        <p>Iniciar Jogo</p>
        <FaPlay />
      </button>

      <button
        className="absolute top-2 right-2 text-xl text-accentDark hover:text-accent transition hover:scale-110 hover:cursor-pointer"
        onClick={closeForm}
        type="button"
      ></button>
    </form>
  );
}

export default NomesForm;
