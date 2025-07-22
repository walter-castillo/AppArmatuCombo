"use client";
import { LimpiarSelectedCombo } from "@/store/slices/comboSlice";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const FinalizarButton = () => {
  const comboSeleccionado = useSelector((state) => state.combo.selectedCombo);
  const dispatch=useDispatch()

  const router = useRouter();

  const generarPDF = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: [90, 130],
    });

    doc.setFontSize(16);
    doc.text("Resumen de tu combo", 10, 20);
    doc.text(`Nombre: ${comboSeleccionado.name}`, 10, 30);

    doc.setFontSize(12);
    doc.text(`Hamburguesa: ${comboSeleccionado.base.name}`, 10, 40);
    doc.text(
      `Ingredientes: ${comboSeleccionado.ingredients.join(", ")}`,
      10,
      50
    );
    doc.text(`Bebida: ${comboSeleccionado.drink}`, 10, 60);
    doc.text(`Bebida: ${comboSeleccionado.totalPrice}`, 10, 70);
    doc.text(`Bebida: ${comboSeleccionado.totalCal}`, 10, 80);

    doc.save("combo-resumen.pdf");

    router.push("/bases");
    dispatch(LimpiarSelectedCombo());
  };

  return (
    <button
      onClick={generarPDF}
      className="px-6 py-3  mr-1 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition"
    >
      Finalizar
    </button>
  );
};

export default FinalizarButton;
