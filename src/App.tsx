import { useMemo, useState } from "react";
import Header from "./components/Header";
import Jogo from "./components/Jogo";
import NomesForm from "./components/NomesForm";
import { Bounce, ToastContainer } from "react-toastify";
import Controles from "./components/Controles";
import { useModal } from "./contexts/useModal";
import ComoJogar from "./components/ComoJogar";
import type { Jogador } from "./types/Jogador";
import getJogadorPadrao from "./utils/getJogadorPadrao";
import type { PlacarProps } from "./components/Placar";
import Placar from "./components/Placar";

function App() {
  const [p1, setP1] = useState<Jogador>(getJogadorPadrao(1));
  const [p2, setP2] = useState<Jogador>(getJogadorPadrao(2));

  const [vitoriasP1, setVitoriasP1] = useState(0);
  const [vitoriasP2, setVitoriasP2] = useState(0);
  const [empates, setEmpates] = useState(0);

  const { setModal, closeModal } = useModal();

  const resultados: PlacarProps = useMemo(
    () => ({
      player1: p1,
      player2: p2,
      empates,
      vitoriasP1,
      vitoriasP2,
    }),
    [p1, p2, vitoriasP1, vitoriasP2, empates]
  );

  const setJogadores = (nome1: string, nome2: string) => {
    setP1((p1) => ({ ...p1, nome: nome1 }));
    setP2((p2) => ({ ...p2, nome: nome2 }));
  };

  const openNomesForm = () => {
    setModal(
      <NomesForm
        player1={p1.nome}
        player2={p2.nome}
        onSubmit={setJogadores}
        onClose={() => closeModal()}
      />
    );
  };

  const openComoJogar = () => {
    setModal(<ComoJogar />);
  };

  return (
    <div className="h-dvh w-dvw overflow-hidden bg-primary relative flex flex-col items-center gap-4 p-6">
      <Header />

      <Placar {...resultados} />

      <Controles
        onRenomear={openNomesForm}
        onDesfazer={() => {}}
        onReiniciar={() => {}}
        onComoJogar={openComoJogar}
      />

      <Jogo />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
