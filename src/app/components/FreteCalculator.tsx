"use client";

import { useState } from "react";

export default function FreteCalculator() {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState<number | null>(null);

  const calcularFrete = () => {
    if (cep.length < 8) return alert("Digite um CEP válido.");
    const valor = Math.floor(Math.random() * 30) + 10;
    setFrete(valor);
  };

  return (
    <div className="mt-6 p-4 border rounded-lg">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        🚚 Consulte o frete
      </h3>

      <div className="flex gap-2">
        <input
          className="border p-2 rounded-lg flex-1"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          className="bg-gray-900 text-white px-4 rounded-lg"
          onClick={calcularFrete}
        >
          OK
        </button>
      </div>

      {frete !== null && (
        <p className="text-sm mt-2 text-green-600 font-semibold">
          Frete estimado: R$ {frete},00
        </p>
      )}
    </div>
  );
}
