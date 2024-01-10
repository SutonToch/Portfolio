import './../styles/Hero.css'
import Me from './../assets/me.jpg'
import About_Me_Icon from './../assets/icons/user_light.png'
import Contact_Icon from './../assets/icons/address-book_light.png'

interface HeroText {
  greeting:string,
  btn_about:string,
  btn_contact:string

}

interface HeroProps {
  text_data:HeroText
}

export default function Hero(props:HeroProps) {

  return (
    <div className="hero">
      <div className="grid-container">
        <div className="img-container">
          <img src={Me} alt=""/>
        </div>
        <div className="content-container">
          <h1>{props.text_data.greeting}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quia. Consequatur dolorum hic optio aut possimus provident, ipsam perspiciatis nisi velit impedit accusamus voluptatibus quae. Dolorem nesciunt doloremque aliquid perspiciatis deserunt, esse libero, mollitia praesentium voluptates at quisquam aperiam dolores quaerat quod voluptatum, magnam saepe hic maxime quae debitis neque.</p>
        </div>
        <a className="hero-btn" href="#">
          <div className="hero-btn--content">
            <img src={About_Me_Icon} alt=""/>
            <p>{props.text_data.btn_about}</p>
          </div>
        </a>
        <a className="hero-btn" href="#">
          <div className="hero-btn--content">
            <img src={Contact_Icon} alt=""/>
            <p>{props.text_data.btn_contact}</p>
          </div>
        </a>
      </div>
    </div>
  )
}