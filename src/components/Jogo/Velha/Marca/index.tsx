interface MarcaProps {
  cor?: string;
  icone?: string;
}

function Marca(props: MarcaProps) {
  return (
    <button
      className="relative flex items-center justify-center aspect-square overflow-hidden"
      style={{ color: props.cor }}
    >
      <div className="opacity-0 hover:opacity-100 transition-all absolute inset-0 bg-radial from-deepLight/70 from-20% to-70% to-transparent" />
      {props.icone}
    </button>
  );
}

export default Marca;
