import Bases from "@/components/Bases";
import ComboPreview from "@/components/ComboPreview";
import Next from "@/components/Next";
import NombreInput from "@/components/NombreInput";

const Page = () => {
  return (
    <div className="py-14 max-w-7xl container mx-auto px-6">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 1: Elegí tu hamburguesa
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Todo gran combo empieza con una buena base. Elegí la hamburguesa que
          más se adapte a tu antojo: ¿simple, doble, veggie o de pollo?.
        </p>
      </div>
      {/* <div className="m-2 flex justify-end lg:px-22"> */}
      <div className="my-2 flex justify-between items-center max-w-7xl ">
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

