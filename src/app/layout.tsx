import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿Cuánto durarías en la Edad Media? 🏰",
  description:
    "Quiz de 1 minuto: respondé 5 preguntas y descubrí tu profesión medieval, tu destino y un logro para compartir.",
  openGraph: {
    title: "¿Cuánto durarías en la Edad Media? 🏰",
    description:
      "5 preguntas, 1 minuto. Profesión, destino y logro desbloqueado incluidos.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "¿Cuánto durarías en la Edad Media? 🏰",
    description:
      "5 preguntas, 1 minuto. Profesión, destino y logro desbloqueado incluidos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}