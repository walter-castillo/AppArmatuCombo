import Bases from "@/components/Bases";
import ComboPreview from "@/components/ComboPreview";
import Next from "@/components/Next";
import NombreInput from "@/components/NombreInput";

export const metadata = {
  title: "Armá tu Combo | Paso 1: Elegí tu hamburguesa",
  description:
    "Empezá a armar tu combo ideal eligiendo la hamburguesa perfecta: simple, doble, veggie o de pollo. ¡El primer paso hacia el combo de tus sueños!",
  openGraph: {
    title: "Armá tu Combo | Paso 1: Elegí tu hamburguesa",
    description:
      "Arrancá el armado de tu combo ideal con una base deliciosa. Elegí entre opciones como simple, doble, veggie o pollo.",
    url: "https://app-armatu-combo.vercel.app",
    siteName: "ArmaTuCombo",
    images: [
      {
        url: "https://app-armatu-combo.vercel.app/bases/doble.png",
        width: 1200,
        height: 630,
        alt: "Paso 1: Elegí tu hamburguesa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armá tu Combo | Paso 1",
    description:
      "¿Con qué base arrancás tu combo? Elegí tu hamburguesa favorita y seguí creando tu pedido ideal.",
    images: ["https://app-armatu-combo.vercel.app/bases/doble.png"],
  },
};


const Page = () => {
  return (
    <div className="py-14 max-w-7xl container mx-auto px-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty  sm:text-4xl text-gray-100">
          Paso 1: Elegí tu hamburguesa
        </h2>
        <p className="mt-6 text-lg/8 text-gray-100">
          Todo gran combo empieza con una buena base. Elegí la hamburguesa que
          más se adapte a tu antojo: ¿simple, doble, veggie o de pollo?.
        </p>
      </div>
      <div className="m-5  flex justify-between items-center max-w-7xl ">
        <NombreInput />
        <Next url={"/ingredientes"} />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8 mt-5 bg-sky-200">
        <Bases />
      </div>
      <ComboPreview />
    </div>
  );
};

export default Page;

