interface BarraProps {
  orientacao: "vertical" | "horizontal";
  largura: React.CSSProperties["width"] | React.CSSProperties["height"];
  posicao: number;
  totalPosicoes: number;
}

function Barra(props: BarraProps) {
  const orient = props.orientacao;
  const larg = props.largura;
  const distancia = `${((props.posicao + 1) / (props.totalPosicoes + 1)) * 100}%`;

  return (
    <div
      className={`aspect-square absolute bg-softLight rounded-full ${
        orient === "vertical" ? "h-full -translate-x-1/2" : "w-full -translate-y-1/2"
      }`}
      style={
        orient === "vertical" ? { left: distancia, width: larg } : { top: distancia, height: larg }
      }
    />
  );
}

export default Barra;
