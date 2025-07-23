"use client";
import { LimpiarSelectedCombo } from "@/store/slices/comboSlice";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const FinalizarButton = () => {
  const comboSeleccionado = useSelector((state) => state.combo.selectedCombo);
  const dispatch = useDispatch();

  const router = useRouter();

  const generarPDF = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: [250, 150],
    });
    const fecha = new Date().toLocaleString();
    const numeroPedido = Math.floor(Math.random() * 1000000);

    doc.setFontSize(10);
    doc.text(`Fecha: ${fecha}`, 100, 10);
    doc.text(`N° Pedido: ${numeroPedido}`, 100, 16);
    doc.setFontSize(14);
    doc.text("Resumen de tu combo", 50, 23);
    doc.setFontSize(12)
    doc.text(`Nombre: ${comboSeleccionado.name}`, 10, 30);

    doc.setFontSize(12);
    doc.text(`Hamburguesa: ${comboSeleccionado.base?.name}`, 10, 40);
    doc.setFontSize(10);
    doc.text(`Ingredientes: `, 10, 50);
    doc.text(`${comboSeleccionado.ingredients.map((ing) => `${ing.name} (${ing.cant}u)`).join(", ")}`,12, 55);
 
    doc.setFontSize(12);
    doc.text(`Bebida:`, 10, 65);
    doc.setFontSize(10);
    doc.text(`${comboSeleccionado.drinks.map((ing) => `${ing.name} (${ing.cant}u)`).join(", ")}`, 12, 70 );

    doc.text(`Calorias: ${comboSeleccionado.totalCal} - Kcal`, 10, 80);
    
    doc.setFontSize(14);
    doc.text(`Total: $ ${comboSeleccionado.totalPrice}`, 10, 90);

    doc.save("combo-resumen.pdf");

    router.push("/bases");
    dispatch(LimpiarSelectedCombo());
  };

  return (
    <button
      onClick={generarPDF}
      className="px-4 py-1  mr-1 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition  cursor-pointer i"
    >
      Finalizar
    </button>
  );
};

export default FinalizarButton;

/* "use client";
import { LimpiarSelectedCombo } from "@/store/slices/comboSlice";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const FinalizarButton = () => {
  const comboSeleccionado = useSelector((state) => state.combo.selectedCombo);
  const dispatch = useDispatch();
  const router = useRouter();

  const generarPDF = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: [80, 120], // tamaño tipo ticket
    });

    let y = 10;

    doc.setFontSize(14);
    doc.text("ArmaTuCombo.app", 10, y);

    y += 8;
    doc.setFontSize(10);
    doc.text(`Nombre: ${comboSeleccionado.name}`, 10, y);

    y += 6;
    doc.text(`Hamburguesa: ${comboSeleccionado.base.name}`, 10, y);

    y += 6;
    const ingredientesTexto = comboSeleccionado.ingredients.map((ing) => `${ing.name} (${ing.cant}u)`).join(", ");

    const ingredientesLineas = doc.splitTextToSize(`Ingredientes: ${ingredientesTexto}`,60);

    ingredientesLineas.forEach((linea) => {doc.text(linea, 10, y);
    y += 5});

    if (comboSeleccionado.drink) {doc.text(`Bebida: ${comboSeleccionado.drink}`, 10, y); y += 6 }


    doc.text(`Total: $${comboSeleccionado.totalPrice}`, 10, y);

    y += 5;
    doc.text(`Calorías: ${comboSeleccionado.totalCal} kcal`, 10, y);

    y += 10;
    doc.setFontSize(9);
    doc.text("¡Gracias por tu pedido!", 10, y);

    doc.save("combo-resumen.pdf");
    dispatch(LimpiarSelectedCombo());
    router.push("/bases");
  };

  return (
    <button
      onClick={generarPDF}
      className="px-6 py-3 mr-1 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition"
    >
      Finalizar
    </button>
  );
};

export default FinalizarButton; */

// doc.text(
//   `Ingredientes: ${comboSeleccionado.ingredients.join(", ")}`,
//   10,
//   50
// );
