import { useState } from "react";

export default function Contador() {
  //   [(count : number), (setCount : number)] = useState(0);

  //   const incrementar: number() =>{
  //     setCount(count => count + 1);
  //   }

  //   const decrementar : number() =>{
  //     setCount(count => count - 1);
  //   }

  return (
    <div>
      <h1>Contador</h1>
      <span></span>
      <div className="flex gap-2">
        <button className="bg-red-500 p-2">Decrementar</button>
        <button className="bg-green-600 p-2">Incrementar</button>
      </div>
    </div>
  );
}
