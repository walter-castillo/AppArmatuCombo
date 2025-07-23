import { ClientProvider } from "./ClientProvider";

import "./globals.css";





export const metadata = {
  title: "Armar Combo",
  description: "arma tu combo personalizado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-sky-400">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
