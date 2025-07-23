import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 p-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la App de Compra de Hamburguesas</h1>
      <p className="text-lg text-gray-700 mb-2">Elige y compra tus hamburguesas favoritas de manera fácil y rápida.</p>
      <p className="text-base text-gray-500">Disfruta de una experiencia sencilla, rápida y segura. ¡Explora nuestro menú y haz tu pedido ahora!</p>
      <div className="mt-6 flex gap-4">
        <Link href="/bases" className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">Arma tu combo</Link>
        <Link href="/combo" className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">Ver combos</Link>
      </div>
    </div>
  );
}
