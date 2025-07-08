// components/Header.tsx
import { Leaf, Bell, Settings } from 'lucide-react';

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-md border-b">
      {/* Left: Logo + App Name */}
      <div className="flex items-center gap-2">
        <Leaf className="text-green-600" size={24} />
        <span className="text-xl font-semibold text-gray-800">CarbonTracker</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black transition-colors">
          <Bell size={22} />
        </button>
        <button className="text-gray-600 hover:text-black transition-colors">
          <Settings size={22} />
        </button>
      </div>
    </header>
  );
}
export default Header;