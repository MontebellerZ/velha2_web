import { useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { toast } from "react-toastify";
import type { Jogador } from "../../types/Jogador";

interface JogadoresFormProps {
  player1: Jogador;
  player2: Jogador;
  onSubmit: (player1: Jogador, player2: Jogador) => void;
  onClose: () => void;
}

function JogadoresForm(props: JogadoresFormProps) {
  const [p1, setP1] = useState(props.player1);
  const [p2, setP2] = useState(props.player2);

  const closeForm = () => {
    props.onClose();
  };

  const submitNomes = (e: React.FormEvent) => {
    e.preventDefault();

    p1.nome = p1.nome.trim();
    p2.nome = p2.nome.trim();

    if (!p1.nome || !p2.nome) {
      toast("Por favor, preencha os nomes dos jogadores.");
      return;
    }

    props.onSubmit(p1, p2);

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

      {inputs.map(({ p, set }, i) => {
        const nJogador = i + 1;
        const id = `NomeJogador${nJogador}`;

        return (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto] gap-1 items-center text-primary font-medium"
          >
            <label key={i} htmlFor={id} className="col-span-2">
              Jogador {nJogador}
            </label>
            <input
              id={id}
              type="text"
              className="text-center border border-accentDark rounded-md bg-accentLight text-primaryDark font-medium"
              placeholder={`Nome do Jogador ${nJogador}`}
              onChange={(e) => set((p) => ({ ...p, nome: e.target.value }))}
              value={p.nome}
              maxLength={15}
            />
            <input
              type="color"
              className="h-6 w-6 cursor-pointer rounded-md border border-primaryLight"
              onChange={(e) => set((p) => ({ ...p, cor: e.target.value }))}
              value={p.cor}
            />
          </div>
        );
      })}

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

export default JogadoresForm;
