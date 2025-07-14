function ControlesBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`${
        props.className || ""
      } bg-secondary p-2 rounded-md hover:bg-secondaryLight transition text-base`}
    >
      {props.children}
    </button>
  );
}

export default ControlesBtn;
