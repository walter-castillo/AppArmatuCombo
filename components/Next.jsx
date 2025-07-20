"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Next = (url) => {
  const pathName = usePathname();
  const nextHref =
    pathName === "/bases"
      ? "/ingredientes"
      : pathName === "/ingredientes"
      ? "/bebidas"
      : pathName;

  return (
    <Link
      className="px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded-xl hover:bg-yellow-600 transition"
      href={nextHref}
      onClick={() => console.log("Ir al paso siguiente", pathName)}
    >
      Siguiente →{console.log(pathName)}
    </Link>
  );
};

export default Next;
