import React from 'react';

interface MoonPhaseProps {
  phase: number;
  darkMode: boolean;
}

const MoonPhase: React.FC<MoonPhaseProps> = ({ phase, darkMode }) => {
  return (
    <div className={`relative w-20 h-20 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-full overflow-hidden`}>
      <div 
        className={`absolute ${darkMode ? 'bg-slate-300' : 'bg-amber-300'} rounded-full`}
        style={{
          width: '100%',
          height: '100%',
          left: `${(1 - phase) * 100}%`,
          transform: phase > 0.5 ? 'scale(-1, 1)' : 'none'
        }}
      ></div>
    </div>
  );
};

export default MoonPhase;