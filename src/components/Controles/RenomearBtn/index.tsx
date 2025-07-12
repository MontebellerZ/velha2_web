import { FaPencil } from "react-icons/fa6";

interface RenomearBtnProps {
  onRenomear: () => void;
}

function RenomearBtn(props: RenomearBtnProps) {
  return (
    <button
      className="bg-secondary p-2 rounded-md hover:bg-secondaryLight transition text-base"
      onClick={props.onRenomear}
    >
      <FaPencil />
    </button>
  );
}

export default RenomearBtn;
