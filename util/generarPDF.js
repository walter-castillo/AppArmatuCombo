import jsPDF from "jspdf";

export const generarPDF = (comboSeleccionado) => {
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
  doc.setFontSize(12);
  doc.text(`Nombre: ${comboSeleccionado.name}`, 10, 30);

  doc.setFontSize(12);
  doc.text(`Hamburguesa: ${comboSeleccionado.base?.name}`, 10, 40);
  doc.setFontSize(10);
  doc.text(`Ingredientes: `, 10, 50);
  doc.text(
    `${comboSeleccionado.ingredients
      .map((ing) => `${ing.name} (${ing.cant}u)`)
      .join(", ")}`,
    12,
    55
  );

  doc.setFontSize(10);
  doc.text(`Bebida:`, 10, 65);
  doc.setFontSize(10);
  doc.text(
    `${comboSeleccionado.drinks
      .map((ing) => `${ing.name} (${ing.cant}u)`)
      .join(", ")}`,
    12,
    70
  );

  doc.text(`Calorias: ${comboSeleccionado.totalCal} - Kcal`, 10, 80);

  doc.setFontSize(14);
  doc.text(`Total: $ ${comboSeleccionado.totalPrice}`, 10, 90);

  doc.save("combo-resumen.pdf");

};
