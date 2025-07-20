"use client";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";

const FinalizarButton = () => {
  const combo = {
    base: "Double Patty",
    ingredientes: ["Queso extra", "Lechuga", "Tomate", "Salsa BBQ"],
    bebida: "Fanta Naranja",
  };
  
  const router = useRouter();

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Resumen de tu combo", 10, 20);

    doc.setFontSize(12);
    doc.text(`Hamburguesa: ${combo.base}`, 10, 40);
    doc.text(`Ingredientes: ${combo.ingredientes.join(", ")}`, 10, 50);
    doc.text(`Bebida: ${combo.bebida}`, 10, 60);

    doc.save("combo-resumen.pdf");

    router.push("/bases");
  };

  return (
    <button
      onClick={generarPDF}
      className="px-6 py-3 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition"
    >
      Finalizar y Descargar PDF
    </button>
  );
};

export default FinalizarButton;
