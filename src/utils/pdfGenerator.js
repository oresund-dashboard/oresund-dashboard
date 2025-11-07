import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * Genererer en PDF-rapport fra data
 * @param {Array} data - array af objekter (fx kunder eller projekter)
 * @param {String} title - titel på dokumentet
 * @param {String} fileName - navn på filen der downloades
 */
export function generatePDF(data, title = "Rapport", fileName = "rapport") {
  if (!data || data.length === 0) {
    alert("Ingen data til rapporten!");
    return;
  }

  const doc = new jsPDF("p", "pt");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(title, 40, 40);
  doc.setFontSize(11);
  doc.setTextColor(100);

  const headers = Object.keys(data[0]).map((key) => key.toUpperCase());
  const body = data.map((item) => Object.values(item));

  doc.autoTable({
    startY: 70,
    head: [headers],
    body,
    theme: "striped",
    styles: {
      fontSize: 10,
      cellPadding: 5,
    },
    headStyles: {
      fillColor: [37, 99, 235], // blå
      textColor: 255,
      fontStyle: "bold",
    },
  });

  const today = new Date().toLocaleString("da-DK");
  doc.text(`Genereret: ${today}`, 40, doc.lastAutoTable.finalY + 30);

  doc.save(`${fileName}.pdf`);
}
