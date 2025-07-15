const DEFAULT_COR = "#aaaaaa";
const PCT_TRANSPARENCIA = 30; // % de transparência

interface PlacarJogadorProps {
  nome?: string;
  marcador: number;
  cor?: string;
  reverter?: boolean;
  ajustado?: boolean;
}

function transparecerCorHex(cor: string): string {
  const hexTransparencia = Math.floor((PCT_TRANSPARENCIA / 100) * 255)
    .toString(16)
    .padStart(2, "0");

  if (!cor.startsWith("#")) return cor;

  switch (cor.length) {
    case 7: // #RRGGBB
      return cor + hexTransparencia;
    case 9: // #RRGGBBAA
      return cor.slice(0, 7) + hexTransparencia;
    case 4: // #RGB
      return cor + hexTransparencia[0];
    case 5: // #RGBA
      return cor.slice(0, 4) + hexTransparencia[0];
    default:
      return cor;
  }
}

function PlacarJogador(props: PlacarJogadorProps) {
  const ajustadoClass = props.ajustado ? "items-center" : "items-stretch";
  const revertidoClass = props.reverter ? "flex-row-reverse" : "";
  const alinhamentoClass = props.reverter ? "justify-start" : "justify-end";
  const cor = props.cor || DEFAULT_COR;
  const corTransparente = transparecerCorHex(cor);

  return (
    <div className={`flex gap-0.5 ${ajustadoClass} ${revertidoClass}`}>
      {props.nome && (
        <span
          className={`border text-lg flex-1 flex items-center justify-center py-0.5 px-4 rounded-md ${alinhamentoClass}`}
          style={{ color: cor, borderColor: cor, backgroundColor: corTransparente }}
        >
          {props.nome}
        </span>
      )}
      <span
        className="border text-4xl flex items-center justify-center py-1 px-2 rounded-md"
        style={{ color: cor, borderColor: cor, backgroundColor: corTransparente }}
      >
        {props.marcador}
      </span>
    </div>
  );
}

export default PlacarJogador;
