// app/components/Settings.tsx
import React from 'react';
import { CalculationMethod, Madhab } from 'adhan';

interface SettingsProps {
  darkMode: boolean;
  calculationMethod: CalculationMethod;
  setCalculationMethod: (method: CalculationMethod) => void;
  madhab: Madhab;
  setMadhab: (madhab: Madhab) => void;
}

const Settings: React.FC<SettingsProps> = ({
  darkMode,
  calculationMethod,
  setCalculationMethod,
  madhab,
  setMadhab
}) => {
  return (
    <div className={`${darkMode ? 'bg-slate-700' : 'bg-white'} p-6 rounded-xl`}>
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Calculation Method</label>
        <select
          value={calculationMethod.name}
          onChange={(e) => setCalculationMethod(CalculationMethod[e.target.value as keyof typeof CalculationMethod]())}
          className={`w-full p-2 rounded ${darkMode ? 'bg-slate-600 text-white' : 'bg-gray-100 text-black'}`}
        >
          {Object.keys(CalculationMethod).map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Madhab</label>
        <select
          value={madhab}
          onChange={(e) => setMadhab(Number(e.target.value) as Madhab)}
          className={`w-full p-2 rounded ${darkMode ? 'bg-slate-600 text-white' : 'bg-gray-100 text-black'}`}
        >
          <option value={Madhab.Shafi}>Shafi</option>
          <option value={Madhab.Hanafi}>Hanafi</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;