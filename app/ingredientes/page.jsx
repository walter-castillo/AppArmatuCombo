import Back from "@/components/Back";
import ComboPreview from "@/components/ComboPreview";
import Ingredients from "@/components/Ingredients";
import Next from "@/components/Next";

export const metadata = {
  title: "Armá tu Combo | Paso 2: Elegí tus ingredientes",
  description:
    "Personalizá tu hamburguesa al máximo. Agregá tus ingredientes favoritos: queso, bacon, cebolla, lechuga y mucho más. ¡Hacela única!",
  openGraph: {
    title: "Armá tu Combo | Paso 2: Elegí tus ingredientes",
    description:
      "Convertí tu hamburguesa en una obra maestra: seleccioná los ingredientes que más te gusten y seguí armando tu combo ideal.",
    url: "https://app-armatu-combo.vercel.app",
    siteName: "ArmaTuCombo",
    images: [
      {
        url: "https://app-armatu-combo.vercel.app/ingredients/bacon.png",
        height: 630,
        alt: "Paso 2: Elegí tus ingredientes",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armá tu Combo | Paso 2",
    description:
      "Sumale los ingredientes que más te gusten: queso, panceta, salsas, veggies y más. ¡Tu combo, a tu manera!",
    images: ["https://app-armatu-combo.vercel.app/ingredients/bacon.png"],
  },
};


const page = () => {
  return (
    <div className="py-14 max-w-7xl container mx-auto px-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 2: Personalizá tus ingredientes
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Ahora sí, es momento de tunear tu hamburguesa. Sumale queso, panceta,
          lechuga, salsas o lo que más te guste. Hacela única, como vos.
        </p>
      </div>
      <div className="m-5 flex justify-between items-center max-w-7xl ">
        <Back url={"/bases"} />
        <Next url={"/bebidas"} />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8  bg-sky-200 ">
        <Ingredients />
      </div>
      <ComboPreview />
    </div>
  );
};

export default page;
