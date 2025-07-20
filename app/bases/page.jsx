'use client'
import Bases from "@/components/Bases";
import ComboPreview from "@/components/ComboPreview";
import Next from "@/components/Next";
import { useState } from "react";

const Page = () => {
  return (
    <div className="bg-white py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
          Paso 1: Elegí tu hamburguesa
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Todo gran combo empieza con una buena base. Elegí la hamburguesa que
          más se adapte a tu antojo: ¿simple, doble, veggie o de pollo?.
        </p>
      </div>
      <div className="m-10 flex justify-end lg:px-22">
        <Next />
      </div>
      <div className="grid max-w-7xl gap-20 px-6 lg:px-8 mt-12 bg-sky-200">
        <Bases />
      </div>
      <ComboPreview />
    </div>
  );
};

export default Page;

