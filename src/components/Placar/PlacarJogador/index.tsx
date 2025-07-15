import transparecerCorHex from "../../../utils/transparecerCorHex";

const DEFAULT_COR = "#aaaaaa";

interface PlacarJogadorProps {
  nome?: string;
  marcador: number;
  cor?: string;
  reverter?: boolean;
  ajustado?: boolean;
}

function PlacarJogador(props: PlacarJogadorProps) {
  const ajustadoClass = props.ajustado ? "items-center" : "items-stretch";
  const revertidoClass = props.reverter ? "flex-row-reverse" : "";
  const alinhamentoClass = props.reverter ? "justify-start" : "justify-end";
  const cor = props.cor || DEFAULT_COR;
  const corTransparente = transparecerCorHex(cor);

  return (
    <div className={`flex gap-0.5 overflow-hidden ${ajustadoClass} ${revertidoClass}`}>
      {props.nome && (
        <span
          className={`border overflow-hidden text-base flex-1 flex items-center justify-center py-0.5 px-2 rounded-md ${alinhamentoClass}`}
          style={{ color: cor, borderColor: cor, backgroundColor: corTransparente }}
        >
          {props.nome}
        </span>
      )}
      <span
        className="border shrink-0 text-4xl flex items-center justify-center py-1 px-2 rounded-md"
        style={{ color: cor, borderColor: cor, backgroundColor: corTransparente }}
      >
        {props.marcador}
      </span>
    </div>
  );
}

export default PlacarJogador;
