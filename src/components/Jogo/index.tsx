import Velha from "./Velha";

interface JogoProps extends React.HTMLAttributes<HTMLDivElement> {
  camadas?: number;
}

function Jogo(props: JogoProps) {
  return (
    <div {...props} className={`w-full max-w-96 aspect-square ${props.className || ""}`}>
      <Velha camadas={props.camadas} />
    </div>
  );
}

export default Jogo;
