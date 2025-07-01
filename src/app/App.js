import './App.css';
import Chatbot from '../chatbot/Chatbot';
import React, {useState} from 'react';


class App extends React.Component {
  isSidebarOpen = false;
  toggleSidebar = false; 

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
     return (
    // Main container for the entire application
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Overlay for smaller screens when sidebar is open */}
      {this.isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={this.toggleSidebar} // Close sidebar when clicking overlay
        ></div>
      )}

      {/* Left sidebar - positioned fixed on smaller screens, relative on larger */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${this.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:flex-shrink-0 lg:rounded-r-lg lg:my-4 lg:ml-4`}>
        {/* Sidebar Header/Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-center">
          {/* SVG Logo for Soil Observation - Farm in Green */}
          <svg
            className="w-10 h-10 text-green-700" // Green color for the farm
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Barn/House outline */}
            <path d="M4 12V20H20V12L12 4L4 12Z" fill="#66BB6A" /> {/* Main barn body */}
            <path d="M10 12H14V16H10V12Z" fill="#4CAF50" /> {/* Door */}
            {/* Field/Ground */}
            <path d="M2 20H22V22H2V20Z" fill="#388E3C" /> {/* Ground line */}
            {/* Fence posts (simplified) */}
            <rect x="5" y="17" width="1" height="3" fill="#388E3C" />
            <rect x="8" y="17" width="1" height="3" fill="#388E3C" />
            <rect x="11" y="17" width="1" height="3" fill="#388E3C" />
            <rect x="14" y="17" width="1" height="3" fill="#388E3C" />
            <rect x="17" y="17" width="1" height="3" fill="#388E3C" />
          </svg>
          <span className="ml-3 text-2xl font-bold text-gray-800">SoilInsight</span> {/* App name */}
        </div>


        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul>
            {/* Dashboard Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0v-9a1 1 0 00-1-1H9m10 0a1 1 0 00-1-1H7a1 1 0 00-1 1v9m4-9h2"
                  ></path>
                </svg>
                Mapas
              </a>
            </li>

            {/* Profile Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Perfil
              </a>
            </li>

            {/* Settings Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Configuración
              </a>
            </li>

            {/* Reports Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-5m3 5v-5m3 5v-5m3-12H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2z"
                  ></path>
                </svg>
                Reportes
              </a>
            </li>

            {/* Analytics Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </svg>
                Graficos
              </a>
            </li>

            {/* Support Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 mb-2"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9.252a1.25 1.25 0 01-1.574 1.574A1.25 1.25 0 015 9.252m0 0a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25 2.25V9.252z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2z"
                  ></path>
                </svg>
                Soporte en línea
              </a>
            </li>

            {/* Logout Link */}
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-red-100 hover:text-red-700 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar for smaller screens */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
          <button
            onClick={this.toggleSidebar}
            className="p-2 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <span className="text-xl font-semibold text-green-700">App Title</span>
          <div></div> {/* Placeholder for right-aligned items if needed */}
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <iframe src="https://mfernand.users.earthengine.app/view/san-matias-de-las-pampas"
            style={{width: '100%', height: '100%'}}>    
          </iframe>
        </main>
      </div>

      {/* Right sidebar - positioned fixed on smaller screens, relative on larger */}
      <aside
        className={`fixed inset-y-0 left-0 m-5 w-70 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${this.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:flex-shrink-0 lg:rounded-r-lg lg:my-4 lg:ml-4`}>

        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-scroll">
          <Chatbot />
        </nav>
      </aside>

    </div>
  );
  }
 
};
export default App;
