"use client";

const Quitar = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-2 px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition"
    >
      - Quitar
    </button>
  );
};

export default Quitar;
