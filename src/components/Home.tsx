import Hero from './Hero.tsx'
import Projects from './Projects.tsx'
import Footer from './Footer.tsx'
import { text_data } from './../data/home_text.ts'

interface HomeProps {
    lang:string
    setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Home(props:HomeProps) {

  return (
    <>
        <Hero 
          text_data = {props.lang == "EN" ? text_data.en.hero : text_data.de.hero}
          setPage={props.setPage}
        />
        <Projects 
          text_data = {props.lang == "EN" ? text_data.en.projects : text_data.de.projects}
          setPage={props.setPage}
        />
        <Footer 
          text_data = {props.lang == "EN" ? text_data.en.footer : text_data.de.footer}
          setPage={props.setPage}
        />
    </>
  )
}