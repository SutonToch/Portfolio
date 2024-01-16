import { useState } from 'react'
import Home from './components/Home.tsx'

import './styles/App.css'

export default function App() {

  const [lang, setLang] = useState("EN")
  const [page, setPage] = useState("Home")

  return (
    <>
      <header>
        <div className="container">
          <div>
            <button onClick={() => setPage("Home")}>Home</button>
            <button onClick={() => setPage("About")}>{lang == "EN" ? "About me" : "Über mich"}</button>
            <button onClick={() => setPage("Projects")}>{lang == "EN" ? "Projects" : "Projekte"}</button>
          </div>
          <div className="lang-container">
            <button className={lang == "EN" ? "lang active" : "lang"} onClick={() => setLang("EN")}>EN</button>
            <button className={lang == "DE" ? "lang active" : "lang"} onClick={() => setLang("DE")}>DE</button>
          </div>
        </div>
      </header>
      {page == "Home" ? <Home lang={lang} setPage={setPage}/> : ""}
    </>
  )
}