import Back from "@/components/Back";
import ComboPreview from "@/components/ComboPreview";
import Drinks from "@/components/Drinks";
import NewCombo from "@/components/NewCombo";
import Next from "@/components/Next";

export const metadata = {
  title: "Armá tu Combo | Paso 3: Elegí tu bebida",
  description:
    "Completá tu combo con la bebida ideal. ¿Sos de gaseosa clásica, agua o jugo natural? Elegí lo que mejor acompañe tu hamburguesa.",
  openGraph: {
    title: "Armá tu Combo | Paso 3: Elegí tu bebida",
    description:
      "El toque final refrescante para tu combo: elegí entre gaseosas, aguas saborizadas o jugos. ¡Vos decidís!",
    url: "https://app-armatu-combo.vercel.app/",
    siteName: "ArmaTuCombo",
    images: [
      {
        url: "https://app-armatu-combo.vercel.app/drinks/sprite.png",
        width: 1200,
        height: 630,
        alt: "Paso 3: Elegí tu bebida",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armá tu Combo | Paso 3",
    description:
      "Elegí la bebida que mejor acompañe tu combo: agua, gaseosa o algo más. ¡Refrescá tu elección!",
    images: ["https://app-armatu-combo.vercel.app/drinks/sprite.png"],
  },
};


const page = () => {
  return (
    <div className="py-14 max-w-7xl container mx-auto px-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 3: Elegí tu bebida
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Para cerrar tu combo, elegí la bebida que más te refresque. Gaseosas
          clásicas, sin azúcar o jugos naturales.!
        </p>
      </div>

      <div className="m-4 flex justify-between">
        <Back url={"/ingredientes"} />
        {/* <NewCombo /> */}
        <Next url={'/base'} finalizar={'Finalizar'} />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8  bg-sky-200">
        <Drinks />
      </div>
      <ComboPreview />
    </div>
  );
};

export default page;
