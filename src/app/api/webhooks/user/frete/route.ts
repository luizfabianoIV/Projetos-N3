import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cepDestino } = await req.json();

    if (!cepDestino) {
      return NextResponse.json({ error: "CEP inválido" }, { status: 400 });
    }

    const response = await fetch(
      "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        },
        body: JSON.stringify([
          {
            from: { postal_code: "01001000" }, // SEU CEP DE ORIGEM
            to: { postal_code: cepDestino },
            package: {
              weight: 0.300,
              height: 4,
              width: 12,
              length: 16,
            },
            options: {
              insurance_value: 50,
              receipt: false,
              own_hand: false,
            },
            services: "1", // Correios PAC (exemplo)
          },
        ]),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao calcular frete" },
      { status: 500 }
    );
  }
}
