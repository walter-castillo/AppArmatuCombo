import Back from "@/components/Back";
import ComboPreview from "@/components/ComboPreview";
import Ingredients from "@/components/Ingredients";
import Next from "@/components/Next";

const page = () => {
  return (
    <div className="bg-white py-24 mx-w-7xl px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 2: Personalizá tus ingredientes
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Ahora sí, es momento de tunear tu hamburguesa. Sumale queso, panceta,
          lechuga, salsas o lo que más te guste. Hacela única, como vos.
        </p>
      </div>
      <div className="mt-16 flex justify-between items-center max-w-7xl container">
        <Back />
        <Next />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8 ">
        <Ingredients />
      </div>
      <ComboPreview />
    </div>
  );
};

export default page;
