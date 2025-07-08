export async function uploadField(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:8000/fields/", {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Failed to analyze field");
  }
  
  return await response.json(); // GeoJSON with carbon predictions
}
