// app/components/PrayerTimes.tsx
import React from 'react';
import { PrayerTimes } from 'adhan';
import { SunIcon } from '@heroicons/react/24/solid';

interface PrayerTimesProps {
  darkMode: boolean;
  prayerTimes: PrayerTimes;
}

const PrayerTimesComponent: React.FC<PrayerTimesProps> = ({ darkMode, prayerTimes }) => {
  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr },
    { name: 'Dhuhr', time: prayerTimes.dhuhr },
    { name: 'Asr', time: prayerTimes.asr },
    { name: 'Maghrib', time: prayerTimes.maghrib },
    { name: 'Isha', time: prayerTimes.isha },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Prayer Times</h2>
      <div className={`grid grid-cols-5 gap-2 ${darkMode ? 'bg-slate-700' : 'bg-emerald-50'} p-4 rounded-xl`}>
        {prayers.map((prayer) => (
          <div key={prayer.name} className="text-center">
            <SunIcon className={`mx-auto mb-1 h-4 w-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
            <p className="text-xs font-semibold">{prayer.name}</p>
            <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {prayer.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-2 text-slate-500">Based on your current location</p>
    </div>
  );
};

export default PrayerTimesComponent;