'use client';
import { seleccionarBase } from '@/store/slices/comboSlice';
import { useDispatch, useSelector } from 'react-redux';

const Bases = () => {
  const bases = useSelector((state) => state.combo.bases);

  const dispatch = useDispatch();

  const handleSelect = (base) => {
    dispatch(seleccionarBase(base));
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
                className="size-35 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-90 active:opacity-70 cursor-pointer"
                onClick={() => handleSelect(base)}
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