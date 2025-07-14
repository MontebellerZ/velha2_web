import { useState } from "react";
import Header from "./components/Header";
import Jogo from "./components/Jogo";
import NomesForm from "./components/NomesForm";
import { Bounce, ToastContainer } from "react-toastify";
import Controles from "./components/Controles";
import { useModal } from "./contexts/useModal";
import ComoJogar from "./components/ComoJogar";

function App() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  const { setModal, closeModal } = useModal();

  const setPlayerNames = (player1: string, player2: string) => {
    setP1(player1);
    setP2(player2);
  };

  const openNomesForm = () => {
    setModal(
      <NomesForm player1={p1} player2={p2} onSubmit={setPlayerNames} onClose={() => closeModal()} />
    );
  };

  const openComoJogar = () => {
    setModal(<ComoJogar />);
  };

  return (
    <div className="h-dvh w-dvw overflow-hidden bg-primary relative flex flex-col items-center p-6">
      <Header />

      <Controles
        onRenomear={openNomesForm}
        onDesfazer={() => {}}
        onReiniciar={() => {}}
        onComoJogar={openComoJogar}
        resultados={{
          empates: 0,
          player1: {
            derrotas: 0,
            empates: 0,
            vitorias: 0,
            nome: p1,
            id: "1",
          },
          player2: {
            derrotas: 0,
            empates: 0,
            vitorias: 0,
            nome: p2,
            id: "2",
          },
        }}
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
