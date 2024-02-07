import './../styles/Hero.css'
import Me from './../assets/me_two.jpg'
import AnimatedBackground from './AnimatedBackground.tsx'

interface HeroText {
  greeting_header:string,
  greeting_content:string,
  btn_about:string,
  btn_contact:string
}

interface HeroProps {
  text_data:HeroText
  setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Hero(props:HeroProps) {

  return (
    <section className="hero">
      <div className="grid-container">
        <div className="img-container">
          <img src={Me} alt=""/>
        </div>
        <div className="content-container">
          <h1>{props.text_data.greeting_header}</h1>
          <p>{props.text_data.greeting_content}</p>
        </div>
      </div>
      <AnimatedBackground 
        smallBoxCount={40}
        mediumBoxCount={30}
        largeBoxCount={20}
      />
    </section>
  )
}