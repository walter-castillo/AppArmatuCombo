"use client"

import Link from "next/link";

const NewCombo = () => {
  return (
    <Link
      href="/bases"
      className=" text-xs px-3 py-3 md:text-base md:px-2 md:py-1 inline-block  font-medium text-gray-700 bg-lime-400 rounded-xl hover:bg-lime-500 transition"
  
    >
      Agregar combo
    </Link>
  );
};

export default NewCombo;