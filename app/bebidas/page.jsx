import Back from "@/components/Back";
import ComboPreview from "@/components/ComboPreview";
import Drinks from "@/components/Drinks";
import FinalizarButton from "@/components/FinalizarButton";
import NewCombo from "@/components/NewCombo";

const page = () => {
  return (
    <div className="py-24 max-w-7xl container mx-auto px-6">
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
        <FinalizarButton />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8  bg-sky-200">
        <Drinks />
      </div>
      <ComboPreview />
    </div>
  );
};

export default page;
