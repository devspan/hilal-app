'use client'

import { useState } from 'react'
import { MoonIcon, SunIcon, HomeIcon, CloudIcon, CalendarIcon } from '@heroicons/react/24/solid'

const HilalApp = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'} min-h-screen p-4 font-sans transition-colors duration-300`}>
      <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg p-6 max-w-md mx-auto`}>
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button onClick={() => setCurrentView('home')} className={`mr-3 p-2 rounded-full ${darkMode ? 'bg-slate-700 text-cyan-400' : 'bg-slate-200 text-cyan-600'}`}>
              <HomeIcon className="h-6 w-6" />
            </button>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Hilal</h1>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Islamic Calendar</p>
            </div>
          </div>
          <button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-amber-400' : 'bg-slate-200 text-amber-600'}`}>
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </header>

        <div className="text-center">
          <p>Welcome to Hilal App</p>
          <p>More features coming soon!</p>
        </div>
      </div>
    </div>
  )
}

export default HilalApp