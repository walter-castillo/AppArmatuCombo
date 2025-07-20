"use client";

import { useState } from "react";

const ComboPreview = () => {
  // Simulación de datos del combo (reemplaza con tu lógica real)
  const [combo, setCombo] = useState({
    base: "Hamburguesa doble",
    ingredientes: ["Queso", "Lechuga", "Tomate"],
    bebida: "Coca-Cola",
    papas: "Papas clásicas",
  });

  return (
    <>
<div className="w-full border-t border-gray-300 "></div>
      <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow bg-rose-100">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Tu combo actual
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Base:</span> {combo.base}
          </li>
          <li>
            <span className="font-semibold">Ingredientes:</span>{" "}
            {combo.ingredientes.join(", ")}
          </li>
          <li>
            <span className="font-semibold">Bebida:</span> {combo.bebida}
          </li>
          <li>
            <span className="font-semibold">Papas:</span> {combo.papas}
          </li>
      <li>
            <span className="font-semibold">Precio total:</span> $450
      </li>
      <li>
            <span className="font-semibold">Calorías totales:</span> 850 kcal
      </li>
        </ul>
      </div>
    </>
  );
};
export default ComboPreview;
