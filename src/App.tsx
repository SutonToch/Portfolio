import { useState } from 'react'
import { text_data } from './text_data.ts'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import Footer from './components/Footer.tsx'
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
      <Hero 
        text_data = {lang == "EN" ? text_data.en.hero : text_data.de.hero}
      />
      <Projects 
        text_data = {lang == "EN" ? text_data.en.projects : text_data.de.projects}
      />
      <Footer 
        text_data = {lang == "EN" ? text_data.en.footer : text_data.de.footer}
      />
    </>
  )
}