import { useMemo, useState } from "react";
import Header from "./components/Header";
import Jogo from "./components/Jogo";
import JogadoresForm from "./components/JogadoresForm";
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

  const setJogadores = (player1: Jogador, player2: Jogador) => {
    setP1({ ...player1 });
    setP2({ ...player2 });
  };

  const openNomesForm = () => {
    setModal(
      <JogadoresForm
        player1={p1}
        player2={p2}
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

      <Controles
        onRenomear={openNomesForm}
        onDesfazer={() => {}}
        onReiniciar={() => {}}
        onComoJogar={openComoJogar}
      />

      <Placar {...resultados} />

      <Jogo camadas={2} />

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
