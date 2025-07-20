"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Back = () => {


    const pathName = usePathname();
    const backHref =
      pathName === "/ingredientes"
        ? "/bases"
        : pathName === "/bebidas"
        ? "/ingredientes"
        : pathName;
  return (
    <Link
      className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
      href={backHref}
      onClick={() => console.log("Volver al paso anterior", pathName)}
    >
      ← Atrás
    </Link>
  );
}

export default Back;