// frontend/src/components/Map.jsx
import React, { useState } from "react";
import MapGL, { Source, Layer } from "react-map-gl/mapbox";
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ geoJsons }) {

  const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const [viewport, setViewport] = useState({
      latitude: -34.6,
      longitude: -58.4,
      zoom: 6,
    });

  return (
     <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar for smaller screens */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
          <button
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
          <span className="text-xl font-semibold text-green-700">Mapa</span>
          <div></div> {/* Placeholder for right-aligned items if needed */}
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <MapGL
            {...viewport}
            onMove={evt => setViewport(evt.viewState)}
            mapboxAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          >
            {geoJsons.map((geojson, i) => (
              <Source key={i} id={`field-${i}`} type="geojson" data={geojson}>
                <Layer
                  id={`field-layer-${i}`}
                  type="fill"
                  paint={{
                    "fill-color": [
                      "interpolate",
                      ["linear"],
                      ["get", "carbon_tCO2"],
                      1.5, "#d1fae5",
                      2.5, "#10b981",
                      3.5, "#065f46",
                    ],
                    "fill-opacity": 0.6,
                  }}
                />
              </Source>
            ))}
          </MapGL>
      </main>
    </div>
  );
}
export default Map;