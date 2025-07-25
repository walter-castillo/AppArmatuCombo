import { ClientProvider } from "./ClientProvider";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-sky-400">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
