import './styles/App.css'
import { useState } from 'react'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import ProjectDetails from './components/ProjectDetails.tsx'
import Footer from './components/Footer.tsx'
import {home_text_data} from './data/home_text.ts'
import {projects_text_data} from './data/projects_text.ts'


export default function App() {

  const [lang, setLang] = useState("DE")
  const [page, setPage] = useState("Home")

  const projectsDetailStates = projects_text_data.de.projects.map((project) => project.state)
  const activeProjectDetailsIndex = projectsDetailStates.indexOf(page)

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
      {projectsDetailStates.includes(page) ? 
        <ProjectDetails 
          details={lang == "EN" ? 
            projects_text_data.en.projects[activeProjectDetailsIndex] : 
            projects_text_data.de.projects[activeProjectDetailsIndex]
          }
        /> : ""}
      <Footer 
          text_data = {lang == "EN" ? home_text_data.en.footer : home_text_data.de.footer}
          changePage={changePage}
      />
    </>
  )
}