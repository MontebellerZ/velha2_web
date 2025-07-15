interface BarraProps {
  orientacao: "vertical" | "horizontal";
  posicao: number;
  totalPosicoes: number;
}

function Barra(props: BarraProps) {
  const orient = props.orientacao;
  const distancia = `${((props.posicao + 1) / (props.totalPosicoes + 1)) * 100}%`;

  return (
    <div
      className={`aspect-square absolute bg-softLight rounded-full ${
        orient === "vertical" ? "w-1/50 h-full -translate-x-1/2" : "h-1/50 w-full -translate-y-1/2"
      }`}
      style={orient === "vertical" ? { left: distancia } : { top: distancia }}
    />
  );
}

export default Barra;
