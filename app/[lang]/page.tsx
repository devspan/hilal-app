'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Moon, Sun, Home, CloudMoon, CalendarIcon } from '@heroicons/react/24/solid'
import MoonPhase from '../components/MoonPhase'
import PrayerTimes from '../components/PrayerTimes'
import Navigation from '../components/Navigation'

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const [darkMode, setDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const t = useTranslations('common')

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <main className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'} min-h-screen p-4 font-sans transition-colors duration-300`}>
      <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg p-6 max-w-md mx-auto`}>
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button onClick={() => setCurrentView('home')} className={`mr-3 p-2 rounded-full ${darkMode ? 'bg-slate-700 text-cyan-400' : 'bg-slate-200 text-cyan-600'}`}>
              <Home className="h-6 w-6" />
            </button>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{t('appName')}</h1>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t('subTitle')}</p>
            </div>
          </div>
          <button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-amber-400' : 'bg-slate-200 text-amber-600'}`}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </header>

        {currentView === 'home' && (
          <>
            <div className="mb-8">
              <div className={`flex items-center justify-between ${darkMode ? 'bg-slate-700' : 'bg-cyan-50'} p-6 rounded-xl`}>
                <MoonPhase phase={0.7} darkMode={darkMode} />
                <div>
                  <p className="font-semibold text-lg">Waning Gibbous</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>70% illuminated</p>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Next new moon in 9 days</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className={`${darkMode ? 'bg-slate-700' : 'bg-emerald-100'} p-4 rounded-xl`}>
                <div className="flex justify-between items-center mb-2">
                  <CloudMoon className={`h-6 w-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <p className="font-semibold">{t('nextSighting')}</p>
                <p className={`text-lg font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>Ramadan 1st</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>In 9 days</p>
              </div>
              <div className={`${darkMode ? 'bg-slate-700' : 'bg-cyan-100'} p-4 rounded-xl`}>
                <div className="flex justify-between items-center mb-2">
                  <CalendarIcon className={`h-6 w-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </div>
                <p className="font-semibold">{t('today')}</p>
                <p className={`text-lg font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Sha'ban 21</p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>March 2, 2024</p>
              </div>
            </div>

            <PrayerTimes darkMode={darkMode} />
          </>
        )}

        <Navigation darkMode={darkMode} onViewChange={setCurrentView} />

        <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-100'} p-4 rounded-xl mb-6`}>
          <h2 className="font-semibold mb-2">{t('communityUpdate')}</h2>
          <p className="text-sm">{t('scholarPanel')}</p>
          <button className={`mt-2 text-sm ${darkMode ? 'text-amber-400' : 'text-cyan-600'}`}>{t('joinLive')}</button>
        </div>

        <footer className={`text-center text-xs ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
          <p>{t('disclaimer')}</p>
        </footer>
      </div>
    </main>
  )
}