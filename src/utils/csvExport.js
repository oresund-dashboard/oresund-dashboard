export function exportToCSV(data, fileName) {
  if (!data || data.length === 0) {
    alert("Ingen data at eksportere!");
    return;
  }

  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Tilføj overskrifter
  csvRows.push(headers.join(";"));

  // Tilføj rækker
  data.forEach((row) => {
    const values = headers.map((h) => {
      const escaped = ("" + row[h]).replace(/"/g, '""');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(";"));
  });

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.csv`;
  link.click();
}
