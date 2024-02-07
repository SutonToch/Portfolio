import Hero from './Hero.tsx'
import Projects from './Projects.tsx'
import { home_text_data } from './../data/home_text.ts'
import { projects_text_data } from '../data/projects_text.ts'

interface HomeProps {
    lang:string
    setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Home(props:HomeProps) {

  return (
    <>
        <Hero 
          text_data = {props.lang == "EN" ? home_text_data.en.hero : home_text_data.de.hero}
          setPage={props.setPage}
        />
        <Projects 
          text_data = {props.lang == "EN" ? projects_text_data.en : projects_text_data.de}
          setPage={props.setPage}
        />
    </>
  )
}