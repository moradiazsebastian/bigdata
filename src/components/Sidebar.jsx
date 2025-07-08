import { useState } from "react";
import { Map, BookOpenCheck, Database, UserRoundSearch, Blocks } from "lucide-react";

const menuItems = [
  { id: "fields", label: "Campos", icon: Map },
  { id: "models", label: "Modelos", icon: Blocks },
  { id: "tasks", label: "Tareas", icon: BookOpenCheck },
  { id: "reports", label: "Reportes", icon: Database },
  { id: "inspections", label: "Inspecciones", icon: UserRoundSearch }
];

export default function Sidebar({ onToggleSection }) {
  const [active, setActive] = useState("map");
  const handleSectionChange = (id) => {
    onToggleSection(id)
    setActive(id);
  }

  return (
    <aside className="w-20 bg-gray-100 h-screen flex flex-col items-center py-6 border-r">
      {menuItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => handleSectionChange(id)}
          className={`flex flex-col items-center justify-center w-full py-4 gap-1 text-xs transition-colors ${
            active === id
              ? "text-green-600 bg-green-100 border-l-4 border-green-600"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </aside>
  );
}