import React from 'react';
import { useTranslations } from 'next-intl';
import { UserGroupIcon, BookOpenIcon, MapPinIcon, CompassIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

interface NavigationProps {
  darkMode: boolean;
  onViewChange: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, onViewChange }) => {
  const t = useTranslations('common');
  const navItems = [
    { icon: UserGroupIcon, label: 'community' },
    { icon: BookOpenIcon, label: 'teachings' },
    { icon: MapPinIcon, label: 'sightings' },
    { icon: CompassIcon, label: 'qibla' },
    { icon: Cog6ToothIcon, label: 'settings' }
  ];

  return (
    <nav className="grid grid-cols-5 gap-4 mb-8">
      {navItems.map(({ icon: Icon, label }) => (
        <button 
          key={label} 
          onClick={() => onViewChange(label)}
          className={`flex flex-col items-center p-3 ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'} rounded-xl transition-colors`}
        >
          <Icon className={`mb-1 h-5 w-5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <span className="text-xs">{t(label)}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;