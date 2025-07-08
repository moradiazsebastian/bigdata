// frontend/src/components/TasksPanel.jsx
import React, { useRef }  from "react";
import { uploadField } from "../api/uploadField";

function TasksPanel({ onReportAdd, tasks }) {
  const fileInputRef = useRef(null);
  
  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) return;
      try {
        const result = await uploadField(file);
        onReportAdd(result); // callback to update map
      } catch (err) {
        alert("Error cargando archivo: " + err.message);
      }
  };
  return (
    <div className="w-72 bg-white border-r px-4 py-6 shadow-inner transition-all duration-300">
      <h2 className="text-lg font-semibold mb-4 capitalize">Tareas</h2>
        <div className="text-gray-600 text-sm">
          {tasks.length === 0 ? (<p className="text-gray-500">Aun no hay tareas cargadas.</p>) : (
          <ul className="space-y-4">
            {tasks.map((field, index) => {
              const props = field.features[0]?.properties || {};
              return (
                <li
                  key={index}
                  className="border rounded p-3 bg-gray-50 hover:bg-gray-100"
                >
                  <div className="font-semibold">{props.field_id || `Field #${index + 1}`}</div>
                    {props.area_ha && (
                      <div className="text-sm text-gray-700">
                        Area: {props.area_ha} ha
                      </div>
                    )}
                    {props.carbon_tCO2 && (
                      <div className="text-sm text-green-700">
                        Carbon: {props.carbon_tCO2} tCO₂/ha
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          {/*<input type="file" accept=".geojson" ref={fileInputRef} />*/}
          <button
            className="w-full flex flex-col items-center gap-1 py-4 text-sm transition-colors bg-green-100 text-green-600"
            onClick={handleUpload}
            >
            Cargar tarea
          </button>
        </div>
      </div>
  );
}

export default TasksPanel;
