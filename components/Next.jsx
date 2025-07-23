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
      className="px-2 py-2 text-xs font-medium text-white bg-gray-400 rounded-xl cursor-not-allowed mx-2 md:mx-0 md:px-2 md:py-1 md:text-sm"
    >
      Siguiente →
    </button>
  ) : (
    <Link
      href={url || pathName}
      onClick={() => console.log("Ir al paso siguiente", pathName)}
      className="px-2 py-2 text-xs font-medium text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition mx-2 md:mx-0 md:px-2 md:py-1 md:text-sm"
    >
      Siguiente →
    </Link>
  );
};

export default Next;
