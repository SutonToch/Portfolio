import './../styles/Hero.css'
import Me from './../assets/me.jpg'

interface HeroText {
  greeting:String,
  btn_about:String,
  btn_contact:String

}

interface HeroProps {
  text_data:HeroText
}

export default function Hero(props:HeroProps) {

  return (
    <div className="hero">
      <div className="grid-container">
        <div className="img-social-container">
          <div className="img-container">
            <img src={Me} alt=""/>
          </div>
          <div className="social-container">
            social icons
          </div>
        </div>
        <div className="content-container">
          <h1>{props.text_data.greeting}</h1>
          <p>... ...</p>
        </div>
        <a className="hero-btn" href="#">
          <div className="hero-btn--content">
            icon & {props.text_data.btn_about}
          </div>
        </a>
        <a className="hero-btn" href="#">
          <div className="hero-btn--content">
            icon & {props.text_data.btn_contact}
          </div>
        </a>
      </div>
    </div>
  )
}