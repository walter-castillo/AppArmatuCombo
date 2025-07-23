"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { generarPDF } from "@/util/generarPDF";
import { LimpiarSelectedCombo } from "@/store/slices/comboSlice";

const Next = ({ url, finalizar }) => {
  const pathName = usePathname();
  const dispatch = useDispatch();

  const selectedCombo = useSelector((state) => state.combo.selectedCombo);

  const handleFinalizar = () => {
    generarPDF(selectedCombo);
    dispatch(LimpiarSelectedCombo())
  };

  if (!selectedCombo.base || !selectedCombo.name) {
    return (
      <button
        disabled
        className="px-1 mx-1 py-2 text-xs whitespace-nowrap text-white bg-gray-400 rounded-xl cursor-not-allowed"
      >
        Siguiente →
      </button>
    );
  }

  if (finalizar) {
    return (
      <Link
        href={"/bases"}
        onClick={handleFinalizar}
        className="px-1 py-2 text-xs whitespace-nowrap text-white bg-green-600 rounded-xl hover:bg-green-700 transition  cursor-pointer"
      >
        Finalizar
      </Link>
    );
  }

  return (
    <Link
      href={url || pathName}
      className="px-1 py-2 text-xs whitespace-nowrap text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition cursor-pointer"
    >
      Siguiente →
    </Link>
  );
};

export default Next;
