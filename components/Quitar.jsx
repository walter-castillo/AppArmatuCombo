"use client";

const Quitar = ({ onClick, cant }) => {
  return (
    <div className="flex">
      <button
        onClick={onClick}
        className="px-3 py-1 text-xs whitespace-nowrap  bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition  cursor-pointer"
      >
        - Quitar
      </button>
      <p className="text-red-600 text-[14px] mx-2 whitespace-nowrap ">
        {cant}-U
      </p>
    </div>
  );
};

export default Quitar;
