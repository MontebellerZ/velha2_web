import { Fragment } from "react/jsx-runtime";
import Barra from "./Barra";
import Marca from "./Marca";

const DEFAULT_TAMANHO = 3;
const DEFAULT_ESPACAMENTO = "2%";

interface VelhaProps {
  tamanhoGrid?: number;
  camadas?: number;
}

function Velha(props: VelhaProps) {
  const camadas = props.camadas || 1;
  const tamanho = props.tamanhoGrid ?? DEFAULT_TAMANHO;
  const barras = Array.from({ length: tamanho - 1 });
  const espacos = Array.from({ length: tamanho ** 2 });

  return (
    <div className="bg-deep w-full h-full rounded-[3%] p-[3%]">
      <div
        className="grid relative w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${tamanho - 1}, 1fr ) 1fr`,
          gap: DEFAULT_ESPACAMENTO,
        }}
      >
        {espacos.map((_, i) => (
          <Fragment key={"espaco_" + i}>
            {camadas > 1 ? <Velha camadas={camadas - 1} /> : <Marca />}
          </Fragment>
        ))}

        {barras.map((_, i, { length }) => (
          <Fragment key={"barra_" + i}>
            <Barra
              orientacao="horizontal"
              posicao={i}
              totalPosicoes={length}
              largura={DEFAULT_ESPACAMENTO}
            />
            <Barra
              orientacao="vertical"
              posicao={i}
              totalPosicoes={length}
              largura={DEFAULT_ESPACAMENTO}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Velha;
