"use client";
import { ingresarNombre } from "@/store/slices/comboSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NombreInput = () => {
  const [nombre, setNombre] = useState("");
  const dispatch = useDispatch();

  const changeName = (valor) => {
      setNombre(valor)
    dispatch(ingresarNombre(valor)); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresá tu nombre"
        value={nombre}
        onChange={(e) => changeName(e.target.value)}
        className="px-1 py-2 text-xs border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );
};

export default NombreInput;
