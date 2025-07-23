"use client";
import {
  restarIngredientes,
  seleccionarIngredientes,
} from "@/store/slices/comboSlice";
import { useDispatch, useSelector } from "react-redux";
import Quitar from "./Quitar";

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
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="size-35 rounded-xl transition-transform duration-200 ease-in-out hover:scale-115 hover:shadow-lg"
                  onClick={() => handleSelect(ingredient)}
                />
                <div className="ml-4">
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {ingredient.price}$ - {ingredient.cal}cal
                  </p>

                  {yaSeleccionado && (
                    <Quitar onClick={() => handleRemove(ingredient)} />
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
