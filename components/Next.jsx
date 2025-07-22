"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Next = ({ url }) => {
  const pathName = usePathname();

  const selectedCombo = useSelector((state) => state.combo.selectedCombo);

  return (!selectedCombo.base || !selectedCombo.name) ? (
    <button
      disabled
      className="px-6 py-3 text-sm font-medium text-white bg-gray-400 rounded-xl cursor-not-allowed"
    >
      Siguiente →
    </button>
  ) : (
    <Link
      href={url || pathName}
      onClick={() => console.log("Ir al paso siguiente", pathName)}
      className="px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition"
    >
      Siguiente →
    </Link>
  );
};

export default Next;
