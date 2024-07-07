import React from 'react';
import { useTranslations } from 'next-intl';
import { SunIcon } from '@heroicons/react/24/solid';

interface PrayerTimesProps {
  darkMode: boolean;
}

const PrayerTimes: React.FC<PrayerTimesProps> = ({ darkMode }) => {
  const t = useTranslations('common');
  const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
  const times = ['5:23 AM', '12:15 PM', '3:45 PM', '6:32 PM', '8:02 PM'];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{t('prayerTimes')}</h2>
      </div>
      <div className={`grid grid-cols-5 gap-2 ${darkMode ? 'bg-slate-700' : 'bg-emerald-50'} p-4 rounded-xl`}>
        {prayers.map((prayer, index) => (
          <div key={prayer} className="text-center">
            <SunIcon className={`mx-auto mb-1 h-4 w-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
            <p className="text-xs font-semibold">{t(prayer)}</p>
            <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {times[index]}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-2 text-slate-500">{t('basedOnLocation')}</p>
    </div>
  );
};

export default PrayerTimes;