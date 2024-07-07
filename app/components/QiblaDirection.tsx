import React from 'react';
import { CompassIcon } from '@heroicons/react/24/solid';

interface QiblaDirectionProps {
  darkMode: boolean;
  direction: number; // in degrees
}

const QiblaDirection: React.FC<QiblaDirectionProps> = ({ darkMode, direction }) => {
  return (
    <div className={`${darkMode ? 'bg-slate-700' : 'bg-cyan-50'} p-6 rounded-xl text-center`}>
      <h2 className="text-lg font-semibold mb-4">Qibla Direction</h2>
      <div className="relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 border-4 border-slate-300 rounded-full"></div>
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${direction}deg)` }}
        >
          <div className="w-1 h-16 bg-red-500 transform -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <CompassIcon className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      <p className="mt-4 font-semibold">{direction}° SE</p>
      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        Based on your current location
      </p>
    </div>
  );
};

export default QiblaDirection;