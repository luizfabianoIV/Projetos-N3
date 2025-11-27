import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {  ClerkProvider } from '@clerk/nextjs';
import { ptBR } from '@clerk/localizations';
import "bootstrap-icons/font/bootstrap-icons.css";
import Hydrate from "./components/Hydrate";


const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "O’Brian Autopeças",
  description: "Peças automotivas com qualidade e confiança",
   icons: { icon: "/logo.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider localization={ptBR}>
    <html lang="pt-br">
      <body className={clsx(inter.className, "bg-slate-700")}>
        <Hydrate>
          <Navbar />
        <main className="min-h-screen bg-white-300 pt-24 p-6">{children}</main>
        </Hydrate>
      </body>
    </html>
    </ClerkProvider>
  );
}
