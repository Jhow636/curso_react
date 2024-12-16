import Botao from "@/components/Botao";

export default function PrimeiraPagina() {
  return (
    <div className="flex gap-3">
      <Botao label="Salvar" />
      <Botao label="Cacelar" />
    </div>
  );
}
