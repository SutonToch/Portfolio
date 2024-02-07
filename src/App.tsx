import './styles/App.css'
import { useState } from 'react'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import {home_text_data} from './data/home_text.ts'


export default function App() {

  const [lang, setLang] = useState("DE")
  const [page, setPage] = useState("Home")

  function changePage(destination:string) {
    window.scrollTo(0, 0);
    setPage(destination)
  }
  
  return (
    <>
      <Header 
          changePage={changePage}
          lang={lang}
          setLang={setLang}
      />
      {page == "Home" ? <Home lang={lang} changePage={changePage}/> : ""}
      {page == "About" ? <About lang={lang}/> : ""}
      <Footer 
          text_data = {lang == "EN" ? home_text_data.en.footer : home_text_data.de.footer}
          changePage={changePage}
      />
    </>
  )
}