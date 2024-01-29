import { SetStateAction, useState } from "react";
import './../styles/Projects.css'
import Projects_Icon from './../assets/icons/clipboard-text_darkblue.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideElement {
    title:string,
    imgPath:string,
    stack:Array<string>,
    liveURL:string,
    short:Array<string>
}

interface ProjectsText {
    slides:Array<SlideElement>
    btn_projects:string
}

interface ProjectsProps {
  text_data:ProjectsText
  setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Projects(props:ProjectsProps) {
    const [slideIndex, setSlideIndex] = useState(0)

    const slideElements = props.text_data.slides.map((slide) => {
        return(
            <div className="slide" key={slide.title}>
                <a href={slide.liveURL} target={"_blank"}>
                    <img src={slide.imgPath}/>
                </a>
            </div>
        )
    })

    const slideContentElements = props.text_data.slides.map((slide) => {
        return(
            <div className="slides__content" key={slide.title}>
                <h2>{slide.title}</h2>
                <div className="stack-container">
                    {slide.stack.map((stackElement) => <div key={stackElement}>{stackElement}</div>)}
                </div>
                {slide.short.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
        <section className="projects">
            <div className="grid-container">
                <div className="slide-content-container">
                    {slideContentElements[slideIndex]}
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {slideElements}
                    </Slider>
                </div>
                <a className="projects-btn" onClick={() => props.setPage("Projects")}>
                  <div className="projects-btn--content">
                    <img src={Projects_Icon} alt=""/>
                    <p>{props.text_data.btn_projects}</p>
                  </div>
                </a>
            </div>
        </section>
    )
}