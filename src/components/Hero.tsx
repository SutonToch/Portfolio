import './../styles/Hero.css'
// import Me from './../assets/me.jpg'
import Me from './../assets/me_two.jpg'
// import About_Me_Icon from './../assets/icons/user_light.png'
// import Contact_Icon from './../assets/icons/address-book_light.png'

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
        {/* <a className="hero-btn" onClick={() => props.setPage("About")}>
          <div className="hero-btn--content">
            <img src={About_Me_Icon} alt=""/>
            <p>{props.text_data.btn_about}</p>
          </div>
        </a>
        <a className="hero-btn" href="mailto:n.suton@web.de">
          <div className="hero-btn--content">
            <img src={Contact_Icon} alt=""/>
            <p>{props.text_data.btn_contact}</p>
          </div>
        </a> */}
      </div>
    </section>
  )
}