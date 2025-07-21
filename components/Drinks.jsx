'use client';
import { useSelector } from 'react-redux';

const Drinks = () => {
  const drinks = useSelector((state) => state.combo.drinks);

  const handleSelect = (id) => {
    // setSelectedBaseId(id);
    console.log("drinks seleccionada:", id);
  };
  return (
    <div>
      <ul role="list" className="grid  sm:grid-cols-2  xl:grid-cols-2">
        {drinks.map((drink) => (
          <li key={drink.id} className="m-6">
            <div className="flex items-center">
              <img
                src={drink.image}
                alt={drink.name}
                className="size-35 rounded-xl transition-transform duration-200 ease-in-out hover:scale-115 hover:shadow-lg"
                onClick={() => handleSelect(drink.id)}
              />
              <div className="ml-4">
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                  {drink.name}
                </h3>
                <p className="text-sm/6 font-semibold text-indigo-600">
                  {drink.price}$ - {drink.cal}cal
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drinks;