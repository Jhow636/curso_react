function Botao(props: any) {
  return (
    <button className="bg-gray-300 p-2 rounded-md">
      {props.label ?? "Ok"}
    </button>
  );
}

export default Botao;
