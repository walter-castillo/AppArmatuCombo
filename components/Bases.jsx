'use client';
import { useSelector } from 'react-redux';

const Bases = () => {
  const bases = useSelector((state) => state.combo.bases);
      
  const handleSelect = (id) => {
    // setSelectedBaseId(id);
    console.log("Base seleccionada:", id);
  };
  return (
    <div>
      <ul role="list" className="grid   sm:grid-cols-2  xl:grid-cols-2">
        {bases.map((base) => (
          <li key={base.id} className="m-6">
            <div className="flex items-center">
              <img
                src={base.image}
                alt={base.name}
                className="size-35 rounded-xl transition-transform duration-200 ease-in-out hover:scale-115 hover:shadow-lg"
                onClick={() => handleSelect(base.id)}
              />
              <div className="ml-4">
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                  {base.name}
                </h3>
                <p className="text-sm/6 font-semibold text-indigo-600">
                  {base.price}$ - {base.cal}cal
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bases