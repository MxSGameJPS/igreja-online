import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata = {
  title: "Igreja Online | Comunidade Evangélica",
  description: "Portal evangélico com acesso à Bíblia, estudos bíblicos, orações e mais recursos para fortalecer sua fé.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
