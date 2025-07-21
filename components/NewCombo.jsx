"use client"

import Link from "next/link";

const NewCombo = () => {
  return (
    <Link
      href="/bases"
      className="inline-block px-6 py-3 text-sm font-medium text-gray-700 bg-lime-400 rounded-xl hover:bg-lime-500 transition"
      onClick={() => console.log("Nuevo combo")}
    >
      Agregar combo
    </Link>
  );
};

export default NewCombo;