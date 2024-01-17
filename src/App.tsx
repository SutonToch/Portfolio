import './styles/App.css'
import { useState } from 'react'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Footer from './components/Footer.tsx'
import {text_data} from './data/home_text.ts'


export default function App() {

  const [lang, setLang] = useState("EN")
  const [page, setPage] = useState("Home")

  return (
    <>
      <Header 
          setPage={setPage}
          lang={lang}
          setLang={setLang}
      />
      {page == "Home" ? <Home lang={lang} setPage={setPage}/> : ""}
      <Footer 
          text_data = {lang == "EN" ? text_data.en.footer : text_data.de.footer}
          setPage={setPage}
      />
    </>
  )
}