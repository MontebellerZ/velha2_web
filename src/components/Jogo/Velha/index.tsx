import { Fragment } from "react/jsx-runtime";
import Barra from "./Barra";
import Marca from "./Marca";

const DEFAULT_TAMANHO = 3;

interface VelhaProps {
  tamanhoGrid?: number;
}

function Velha(props: VelhaProps) {
  const tamanho = props.tamanhoGrid ?? DEFAULT_TAMANHO;
  const barras = Array.from({ length: tamanho - 1 });
  const marcas = Array.from({ length: tamanho ** 2 });

  return (
    <div className="aspect-square bg-deep h-96 rounded-[3%]">
      <div
        className="grid relative m-[3%]"
        style={{ gridTemplateColumns: `repeat(${tamanho}, 1fr)` }}
      >
        {marcas.map((_, i) => (
          <Marca key={"marca_" + i} />
        ))}

        {barras.map((_, i, { length }) => (
          <Fragment key={i}>
            <Barra orientacao="horizontal" posicao={i} totalPosicoes={length} />
            <Barra orientacao="vertical" posicao={i} totalPosicoes={length} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Velha;
