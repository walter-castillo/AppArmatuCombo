import Link from "next/link";

export const metadata = {
  title: "ArmaTuCombo | El mejor lugar para crear tu hamburguesa ideal",
  description:
    "Bienvenido a ArmaTuCombo, la app donde podés armar tu hamburguesa y combo perfecto paso a paso. Ingredientes frescos, combinaciones únicas y todo a tu gusto.",
  openGraph: {
    title: "ArmaTuCombo | Crea tu combo perfecto",
    description:
      "Elegí entre hamburguesas, ingredientes, bebidas y más. Armar tu combo nunca fue tan fácil y divertido.",
    url: "https://app-armatu-combo.vercel.app",
    siteName: "ArmaTuCombo",
    images: [
      {
        url: "https://app-armatu-combo.vercel.app/bases/doble.png", // Imagen atractiva del producto o logo
        width: 1200,
        height: 630,
        alt: "ArmaTuCombo - El mejor combo a tu medida",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArmaTuCombo | Crea tu combo perfecto",
    description:
      "Arma tu hamburguesa y combo ideal con ingredientes frescos y opciones personalizadas. ¡Arrancá ahora!",
    images: ["https://app-armatu-combo.vercel.app/bases/doble.png"],
  },
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 p-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la App de Compra de Hamburguesas</h1>
      <p className="text-lg text-gray-700 mb-2">Elige y compra tus hamburguesas favoritas de manera fácil y rápida.</p>
      <p className="text-base text-gray-500">Disfruta de una experiencia sencilla, rápida y segura. ¡Explora nuestro menú y haz tu pedido ahora!</p>
      <div className="mt-6 flex gap-4">
        <Link href="/bases" className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">Arma tu combo</Link>
      </div>
    </div>
  );
}
