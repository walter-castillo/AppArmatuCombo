'use client';
import { restarBebidas, seleccionarDrinks } from '@/store/slices/comboSlice';
import { useDispatch, useSelector } from 'react-redux';
import Quitar from '@/components/Quitar';
import Image from 'next/image';

const Drinks = () => {
  const drinks = useSelector((state) => state.combo.drinks);
  const drinksSelected = useSelector(state => state.combo.selectedCombo.drinks)
  const dispatch = useDispatch()

  const handleSelect = (drink) => {
    dispatch(seleccionarDrinks(drink))
  };

  const handleRemove = (drink) => { dispatch(restarBebidas(drink))};

  return (
    <div>
      <ul role="list" className="grid  sm:grid-cols-2  xl:grid-cols-2">
        {drinks.map((drink) => {
        const yaSeleccionado = drinksSelected.find(
          (item) => item.id === drink.id
        );
        return (
          <li key={drink.id} className="m-6">
            <div className="flex items-center">
              <div className="flex items-center w-[140px]">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-90 active:opacity-70 cursor-pointer"
                  onClick={() => handleSelect(drink)}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                  {drink.name}
                </h3>
                <p className="text-sm/6 font-semibold text-indigo-600">
                  {drink.price}$ - {drink.cal}cal
                </p>
                {yaSeleccionado && (
                  <Quitar
                    onClick={() => handleRemove(drink)}
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

export default Drinks;