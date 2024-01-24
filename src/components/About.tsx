import './../styles/About.css'
import { about_text_data } from './../data/about_text.ts'

interface AboutProps {
    lang:string
  }
  
  export default function About(props:AboutProps) {

    const current_text_data = props.lang == "EN" ? about_text_data.en : about_text_data.de
    const content = current_text_data.about_content.map((item) => {
      return(
        <div>
          <h2>
            {item.header}
          </h2>
          <p>
            {item.content}
          </p>
        </div>
      )
    })

    
  
    return (
      <main className="about">
        {/* <h1 className="about--headline">
          {current_text_data.headline}
        </h1> */}
        <div className="about--content-container">
          {...content}
        </div>
      </main>
    )
  }