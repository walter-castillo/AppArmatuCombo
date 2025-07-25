"use client";

import { useSelector } from "react-redux";

const ComboPreview = () => {
  const comboSeleccionado = useSelector((state) => state.combo.selectedCombo);

  return (
    <>
      <div className="w-full border-t border-gray-300 "></div>
      <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow bg-rose-300">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Tu combo actual
        </h3>
        <p className="mb-4 text-lg text-gray-900">
          <span className="font-semibold">Nombre del combo:</span>{" "}
          {comboSeleccionado.name}
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Base:</span>{" "}
            {comboSeleccionado.base?.name}
          </li>
          <li>
            <span className="font-semibold">Ingredientes:</span>{" "}
            {comboSeleccionado?.ingredients
              .map((ing) => `${ing.name} (${ing.cant}u)`)
              .join(", ")}
          </li>
          <li>
            <span className="font-semibold">Bebida:</span>{" "}
            {comboSeleccionado?.drinks
              .map((dri) => `${dri.name} (${dri.cant}u)`)
              .join(", ")}
          </li>
          <li>
            <span className="font-semibold">Precio total:</span> ${" "}
            {comboSeleccionado.totalPrice}
          </li>
          <li>
            <span className="font-semibold">Calorías totales:</span>{" "}
            {comboSeleccionado.totalCal} kcal
          </li>
        </ul>
      </div>
    </>
  );
};
export default ComboPreview;
