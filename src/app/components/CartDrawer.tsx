"use client";

import { useCartStore } from "@/src/store";
import CartItem from "./CartItem";
import FreteCalculator from "./FreteCalculator";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { cart, isOpen, toggleCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 w-[400px] h-full bg-white shadow-2xl p-6 z-50 transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-xl font-bold">Meu Carrinho</h2>
        <button onClick={toggleCart} className="text-gray-600 text-xl">✖</button>
      </div>

      {/* LISTA */}
      <div className="flex flex-col gap-4 mt-4 max-h-[50vh] overflow-y-auto">
        {cart.length > 0 ? cart.map(item => <CartItem key={item.id} product={item} />) : (
          <p className="text-gray-500 text-sm text-center mt-10">Seu carrinho está vazio.</p>
        )}
      </div>

      {/* FRETE */}
      <FreteCalculator />

      {/* TOTAL */}
      <div className="border-t pt-4 mt-4">
        <p className="flex justify-between text-lg font-semibold">
          <span>Subtotal:</span> <span>{formatPrice(subtotal)}</span>
        </p>

        <button className="mt-4 bg-blue-600 text-white text-center w-full rounded-lg py-3 font-semibold hover:bg-blue-700">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}