"use client";
import {
  restarIngredientes,
  seleccionarIngredientes,
} from "@/store/slices/comboSlice";
import { useDispatch, useSelector } from "react-redux";
import Quitar from "./Quitar";
import Image from "next/image";

const Ingredients = () => {
  const ingredients = useSelector((state) => state.combo.ingredients);
  const ingredientsSelected = useSelector(state => state.combo.selectedCombo.ingredients);

  const dispatch = useDispatch();

  const handleSelect = (ingredient) => {
    dispatch(seleccionarIngredientes(ingredient));
  };

  const handleRemove = (ingredient) => {
    dispatch(restarIngredientes(ingredient));
  };

  return (
    <div>
      <ul role="list" className="grid sm:grid-cols-2 xl:grid-cols-2">
        {ingredients.map((ingredient) => {

          const yaSeleccionado = ingredientsSelected.find(item => item.id === ingredient.id);

          return (
            <li key={ingredient.id} className="m-6">
                <div className="flex items-center">
                 <div className="flex items-center w-[140px]">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={300}
                    height={250}
                    className="w-full h-auto rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-90 active:opacity-70 cursor-pointer"
                    onClick={() => handleSelect(ingredient)}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {ingredient.price}$ - {ingredient.cal}cal
                  </p>

                  {yaSeleccionado && (
                    <Quitar
                      onClick={() => handleRemove(ingredient)}
                      cant={yaSeleccionado.cant}
                    />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
