"use client";

import { useCartStore } from "@/src/store";
import { ProductType } from "../types/ProductType";

export default function Cart() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Meu Carrinho</h2>

      {/* LISTA DE PRODUTOS */}
      <CartList />

      {/* TOTAL */}
      <CartSummary />

    </div>
  );
}
