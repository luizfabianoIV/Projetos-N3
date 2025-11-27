"use client"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react"
import { useCartStore } from "@/src/store";
import CheckoutForm from "./CheckoutForm";

const stripePromisse = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const cartStore = useCartStore();
     const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent,
            }),
        }).then((res) => { return res.json() }).then((data) => {
            cartStore.setPaymentIntent(data.paymentIntent.id);
            setClientSecret(data.paymentIntent?.clientSecret);
        });
        
    }, [cartStore.cart, cartStore.paymentIntent]);

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'night',
            labels: 'floating',
        }
    }

    return (
        <div>
            {clientSecret ? (
                    <Elements options={options} stripe={stripePromisse}>
                        <CheckoutForm clientSecret={clientSecret}/>
            <h1>Checkout</h1>
            </Elements>
             ) : (
                <div>
                    <h1>Carregando...</h1>
                </div>
             )
        }  
        </div>
    );
}