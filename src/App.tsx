import './styles/App.css'
import { useState } from 'react'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import {text_data} from './data/home_text.ts'


export default function App() {

  const [lang, setLang] = useState("DE")
  const [page, setPage] = useState("Home")
  
  return (
    <>
      <Header 
          setPage={setPage}
          lang={lang}
          setLang={setLang}
      />
      {page == "Home" ? <Home lang={lang} setPage={setPage}/> : ""}
      {page == "About" ? <About lang={lang}/> : ""}
      <Footer 
          text_data = {lang == "EN" ? text_data.en.footer : text_data.de.footer}
          setPage={setPage}
      />
    </>
  )
}