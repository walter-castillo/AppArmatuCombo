'use client'
import { useSelector, useDispatch } from "react-redux";
import {
  selectBase,
  toggleIngredient,
  selectDrink,
  clearCombo,
} from "@/store/slices/combo2Slice";
import {
  selectBases,
  selectIngredients,
  selectDrinks,
  selectSelectedBase,
  selectSelectedIngredients,
  selectSelectedDrink,
  selectTotalPrice,
  selectTotalCal,
} from "@/store/selectors/comboSelectors";


export default function Combo() {
  const dispatch = useDispatch();

  const bases = useSelector(selectBases);
  const ingredients = useSelector(selectIngredients);
  const drinks = useSelector(selectDrinks);

  const selectedBase = useSelector(selectSelectedBase);
  const selectedIngredients = useSelector(selectSelectedIngredients);
  const selectedDrink = useSelector(selectSelectedDrink);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCal = useSelector(selectTotalCal);

  const handleBaseSelect = (base) => {
    dispatch(selectBase(base));
  };

  const handleIngredientToggle = (ingredient) => {
    dispatch(toggleIngredient(ingredient));
  };

  const handleDrinkSelect = (drink) => {
    dispatch(selectDrink(drink));
  };

  return (
    <>
      <h2 className="text-xl font-bold">Armá tu Combo 🍟</h2>

      {/* Base */}
      <div>
        <h3 className="font-semibold">Base:</h3>
        <div className="flex flex-wrap gap-2">
          {bases.map((b) => (
            <button
              key={b.id}
              onClick={() => handleBaseSelect(b)}
              className={`px-4 py-2 border rounded ${
                selectedBase?.id === b.id ? "bg-blue-500 text-white" : ""
              }`}
            >
              {b.name} (${b.price})
            </button>
          ))}
        </div>
      </div>

      {/* Ingredientes */}
      <div>
        <h3 className="font-semibold">Ingredientes:</h3>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ing) => (
            <button
              key={ing.id}
              onClick={() => handleIngredientToggle(ing)}
              className={`px-3 py-1 border rounded ${
                selectedIngredients.find((i) => i.id === ing.id)
                  ? "bg-green-500 text-white"
                  : ""
              }`}
            >
              {ing.name} (+${ing.price})
            </button>
          ))}
        </div>
      </div>

      {/* Bebidas */}
      <div>
        <h3 className="font-semibold">Bebida:</h3>
        <div className="flex flex-wrap gap-2">
          {drinks.map((d) => (
            <button
              key={d.id}
              onClick={() => handleDrinkSelect(d)}
              className={`px-4 py-2 border rounded ${
                selectedDrink?.id === d.id ? "bg-purple-500 text-white" : ""
              }`}
            >
              {d.name} (${d.price})
            </button>
          ))}
        </div>
      </div>

      {/* Resumen */}
      <div className="p-4 border rounded bg-gray-100">
        <h4 className="font-semibold">Resumen:</h4>
        <p>
          Total: <strong>${totalPrice}</strong>
        </p>
        <p>
          Calorías: <strong>{totalCal} kcal</strong>
        </p>
        <button
          className="mt-2 px-4 py-2 border rounded bg-red-500 text-white"
          onClick={() => dispatch(clearCombo())}
        >
          Limpiar Combo
        </button>
      </div>
    </>
  );
}
