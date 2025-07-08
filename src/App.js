// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Chatbot from "./components/Chatbot"
import FieldsPanel from "./components/FieldsPanel";
import ModelsPanel from "./components/ModelsPanel";
import InspectionsPanel from "./components/InspectionsPanel";
import ReportsPanel from "./components/ReportsPanel";
import TasksPanel from "./components/TasksPanel";
import { Leaf } from 'lucide-react';

function App() {
  const [geoJsons, setFields] = useState([]); // maneja campos
  const [models, setModels] = useState([]); // maneja modelos
  const [inspections, setInspections] = useState([]); // maneja inspecciones
  const [reports, setReports] = useState([]); // maneja reportes
  const [tasks, setTasks] = useState([]); // maneja tareas
  const [displayedSection, setDisplaySection] = useState("fields"); //maneja paneles 
  
  const updateDisplayedSection = (newSection) => {
    setDisplaySection(newSection);
  };

  const addField = (newGeoJson) => {
    setFields(prev => [...prev, newGeoJson]);
  };

  const addModels = (newModel) => {
    setModels(prev => [...prev, newModel]);
  };

  const addInspections = (newInspection) => {
    setInspections(prev => [...prev, newInspection]);
  };

  const addReports = (newReport) => {
    setReports(prev => [...prev, newReport]);
  };

  const addTasks = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar onToggleSection={updateDisplayedSection}/>
        {/* Mapas, Analisis y Campos */}
        <div className="flex flex-1">
          {displayedSection === "fields" && <FieldsPanel fields={geoJsons} onGeoJsonAdd={addField}/>}
          {displayedSection === "models" && <ModelsPanel models={models} onModelsAdd={addModels}/>}
          {displayedSection === "inspections" && <InspectionsPanel inspections={inspections} onInspectionsAdd={addInspections}/>}
          {displayedSection === "reports" && <ReportsPanel reports={reports} onReportsAdd={addReports}/>}
          {displayedSection === "tasks" && <TasksPanel tasks={tasks} onTasksAdd={addTasks}/>}
          <Map geoJsons={geoJsons}/>
        </div>

        {/* Right Sidebar */}
        <Chatbot />
      </div>
    </div>
  );
}

export default App;