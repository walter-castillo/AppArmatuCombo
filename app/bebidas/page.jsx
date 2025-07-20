import Back from "@/components/Back";
import ComboPreview from "@/components/ComboPreview";
import Drinks from "@/components/Drinks";
import FinalizarButton from "@/components/FinalizarButton";

const page = () => {
  return (
    <div className="bg-white py-24 mx-w-7xl px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 3: Elegí tu bebida
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Para cerrar tu combo, elegí la bebida que más te refresque. Gaseosas
          clásicas, sin azúcar o jugos naturales.!
        </p>
      </div>
      <div className="mt-16 flex justify-between items-center max-w-7xl container">
        <Back />
        <FinalizarButton />

        {/* <button
          className="px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition"
          // onClick={() => console.log("finalizar")}
        >
          Finalizar
        </button> */}
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8 ">
        <Drinks />
      </div>
      <ComboPreview />
    </div>
  );
};

export default page;
