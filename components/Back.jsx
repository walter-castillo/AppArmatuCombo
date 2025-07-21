"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Back = ({url}) => {


    const pathName = usePathname();
  return (
    <Link
      href={url ? url : pathName}
      passHref
    >
      <span
        className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition cursor-pointer inline-block"
        onClick={() => console.log("Volver al paso anterior", pathName)}
      >
        ← Atrás
      </span>
    </Link>
  );
}

export default Back;