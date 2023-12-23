import { useState } from 'react'
import Hero from './components/Hero.tsx'
import './styles/App.css'

export default function App() {

  const [lang, setLang] = useState("EN")

  return (
    <>
      <header>
        <div className="container">
          <div className="lang-container">
            <button className={lang == "EN" ? "lang active" : "lang"} onClick={() => setLang("EN")}>EN</button>
            <button className={lang == "DE" ? "lang active" : "lang"} onClick={() => setLang("DE")}>DE</button>
          </div>
        </div>
      </header>
      <Hero />
      {/* Projekte */}
      {/* Footer */}
    </>
  )
}