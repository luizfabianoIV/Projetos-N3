import Stripe from "stripe";
import ProductImage from "../../components/Productimage";
import { formatPrice } from "@/lib/utils";
import AddCart from "../../components/AddCart";

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});
  const produto = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: produto.id,
  });

  return {
    id: produto.id,
    price: price.data[0]?.unit_amount ?? 0,
    name: produto.name,
    image: produto.images[0],
    description: produto.description,
    currency: price.data[0]?.currency ?? "BRL",
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  const installment = product.price / 5; // 5x igual ao site
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* LEFT SIDE (IMAGE) */}
      <div className="flex flex-col items-center justify-start">
        <div className="border rounded-lg shadow-sm overflow-hidden max-w-[500px]">
          <ProductImage product={product} />
        </div>
        <p className="text-gray-400 text-xs mt-2">
          Imagem meramente ilustrativa
        </p>
      </div>

      {/* RIGHT SIDE (INFO) */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <h2 className="text-2xl font-bold text-blue-600">
          {formatPrice(product.price)}
        </h2>

        <p className="text-sm text-gray-600">
          5x de <strong>{formatPrice(installment)}</strong> sem juros
        </p>

        <p className="text-gray-500 text-sm whitespace-pre-line">
          {product.description}
        </p>

        {/* FRETE */}
        <div className="flex gap-2 border p-3 rounded-lg items-center">
          <span className="text-2xl">🚚</span>
          <input
            className="border p-2 rounded-lg flex-1"
            placeholder="Digite o CEP"
          />
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            OK
          </button>
        </div>

        {/* ADD TO CART */}
        <AddCart product={product} />
      </div>
    </div>
  );
}
