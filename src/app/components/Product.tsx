import { ProductType } from "../types/ProductType";
import ProductImage from "./Productimage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const price = product.price ?? 0; // 👈 GARANTE QUE NUNCA SERÁ NULL
  const installment = price / 12;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col bg-white shadow-md rounded-xl p-4 text-gray-900 w-full max-w-[260px] hover:shadow-lg transition">
        
        {/* IMAGEM */}
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-md bg-gray-100">
          <ProductImage product={product} fill />
        </div>

        {/* NOME */}
        <h2 className="mt-3 font-semibold text-sm line-clamp-2 min-h-[40px]">
          {product.name}
        </h2>

        {/* PREÇO */}
        <p className="text-xl font-bold text-orange-600 mt-2">
          {formatPrice(price)}
        </p>

        {/* PARCELAMENTO */}
        <p className="text-xs text-gray-500">
          em até <span className="font-semibold">12x de {formatPrice(installment)}</span> sem juros
        </p>

        {/* BOTÃO */}
        <div className="mt-4">
          <AddCart product={product} />
        </div>

      </div>
    </Link>
  );
}
