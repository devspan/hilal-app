'use client'

// app/components/HilalApp.tsx
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, HomeIcon, MapPinIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { PrayerTimes, Coordinates, CalculationMethod, Madhab } from 'adhan'
import moment from 'moment-timezone'
import MoonPhase from './MoonPhase'
import PrayerTimesComponent from './PrayerTimes'
import QiblaDirection from './QiblaDirection'
import Settings from './Settings'

interface HilalAppProps {
  lang: string;
}

const HilalApp: React.FC<HilalAppProps> = ({ lang }) => {
  const [darkMode, setDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState<'home' | 'qibla' | 'settings'>('home')
  const [location, setLocation] = useState<Coordinates | null>(null)
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null)
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null)
  const [hijriDate, setHijriDate] = useState<string>('')
  const [calculationMethod, setCalculationMethod] = useState<CalculationMethod>(CalculationMethod.MoonsightingCommittee())
  const [madhab, setMadhab] = useState<Madhab>(Madhab.Shafi)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = new Coordinates(position.coords.latitude, position.coords.longitude)
        setLocation(coords)
        updateCalculations(coords)
      },
      (error) => {
        console.error("Error getting location:", error)
      }
    )
  }, [calculationMethod, madhab])

  const updateCalculations = (coords: Coordinates) => {
    const date = new Date()
    const params = calculationMethod
    params.madhab = madhab
    const prayerTimes = new PrayerTimes(coords, date, params)
    setPrayerTimes(prayerTimes)

    const qibla = prayerTimes.qibla()
    setQiblaDirection(qibla)

    // Calculate Hijri date
    const hijriDate = moment(date).format('iD iMMMM iYYYY')
    setHijriDate(hijriDate)
  }

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <div className="mb-8">
              <div className={`flex items-center justify-between ${darkMode ? 'bg-slate-700' : 'bg-cyan-50'} p-6 rounded-xl`}>
                <MoonPhase phase={0.7} darkMode={darkMode} />
                <div>
                  <p className="font-semibold text-lg">Hijri Date</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{hijriDate}</p>
                </div>
              </div>
            </div>
            {prayerTimes && <PrayerTimesComponent darkMode={darkMode} prayerTimes={prayerTimes} />}
          </>
        )
      case 'qibla':
        return qiblaDirection !== null && <QiblaDirection darkMode={darkMode} direction={qiblaDirection} />
      case 'settings':
        return (
          <Settings
            darkMode={darkMode}
            calculationMethod={calculationMethod}
            setCalculationMethod={setCalculationMethod}
            madhab={madhab}
            setMadhab={setMadhab}
          />
        )
      default:
        return null
    }
  }

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
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Islamic Calendar ({lang})</p>
            </div>
          </div>
          <button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-amber-400' : 'bg-slate-200 text-amber-600'}`}>
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </header>

        {renderView()}

        <nav className="grid grid-cols-3 gap-4 mt-8">
          <button
            onClick={() => setCurrentView('home')}
            className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'} transition-colors`}
          >
            <HomeIcon className="h-6 w-6 mx-auto" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => setCurrentView('qibla')}
            className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'} transition-colors`}
          >
            <MapPinIcon className="h-6 w-6 mx-auto" />
            <span className="text-xs mt-1">Qibla</span>
          </button>
          <button
            onClick={() => setCurrentView('settings')}
            className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-200 hover:bg-slate-300'} transition-colors`}
          >
            <Cog6ToothIcon className="h-6 w-6 mx-auto" />
            <span className="text-xs mt-1">Settings</span>
          </button>
        </nav>

        <footer className={`text-center text-xs ${darkMode ? 'text-slate-500' : 'text-slate-600'} mt-8`}>
          <p>Always verify with local authorities</p>
        </footer>
      </div>
    </div>
  )
}

export default HilalApp