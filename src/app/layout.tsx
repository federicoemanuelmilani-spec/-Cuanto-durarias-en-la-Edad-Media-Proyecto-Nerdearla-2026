import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿Cuánto durarías en la Edad Media? 🏰",
  description:
    "5 preguntas. 1 minuto. ¿Cuánto durarías en la Edad Media? Descubrí tu profesión, cuánto sobrevivirías y cuál sería tu desenlace.",
  openGraph: {
    title: "¿Cuánto durarías en la Edad Media? 🏰",
    description:
      "5 preguntas. 1 minuto. ¿Cuánto durarías en la Edad Media? Descubrí tu profesión, cuánto sobrevivirías y cuál sería tu desenlace.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "¿Cuánto durarías en la Edad Media? 🏰",
    description:
      "5 preguntas. 1 minuto. ¿Cuánto durarías en la Edad Media? Descubrí tu profesión, cuánto sobrevivirías y cuál sería tu desenlace.",
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