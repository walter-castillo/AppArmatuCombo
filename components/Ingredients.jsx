'use client';
import { useSelector } from 'react-redux';

const Ingredients = () => {
  const ingredients = useSelector((state) => state.combo.ingredients);
  
  const handleSelect = (id) => {
    // setSelectedBaseId(id);
    console.log("Ingredients seleccionada:", id);
  };

  return (
    <div>
      <ul role="list" className="grid   sm:grid-cols-2  xl:grid-cols-2">
        {ingredients.map((ingredient) => (
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;