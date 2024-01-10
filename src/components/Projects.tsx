import { SetStateAction, useState } from "react";
import './../styles/Projects.css'
import Projects_Icon from './../assets/icons/clipboard-text_darkblue.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideElement {
    title:string,
    imgPath:string,
    stack:string,
    liveURL:string,
    content:string
}

interface ProjectsText {
    slides:Array<SlideElement>
    btn_projects:string
}

interface ProjectsProps {
  text_data:ProjectsText
}

export default function Projects(props:ProjectsProps) {
    const [slideIndex, setSlideIndex] = useState(0)

    const slideElements = props.text_data.slides.map((slide) => {
        return(
            <div className="slide" key={slide.title}>
                <img src={slide.imgPath}/>
            </div>
        )
    })

    const slideContentElements = props.text_data.slides.map((slide) => {
        return(
            <div className="slides__content" key={slide.content}>
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
            </div>
        )
    })

    const settings = {
      dots: true,
      slidesToShow: 1,
      arrows: true,
      infinite: false,
      afterChange: (index: SetStateAction<number>) => {
          setSlideIndex(index)
      }
    }

    return (
        <div className="projects">
            <div className="grid-container">
                <div className="slide-content-container">
                    {slideContentElements[slideIndex]}
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {slideElements}
                    </Slider>
                    <a className="projects-btn" href="#">
                      <div className="projects-btn--content">
                        <img src={Projects_Icon} alt=""/>
                        <p>{props.text_data.btn_projects}</p>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    )
}