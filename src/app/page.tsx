import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href="/primeiro">Primeiro Componente</Link>
      <Link href="/contador">Contador</Link>
    </div>
  );
}
