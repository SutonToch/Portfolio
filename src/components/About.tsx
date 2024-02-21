import './../styles/About.css'
import { about_text_data } from './../data/about_text.ts'

interface AboutProps {
  lang:string
}
  
export default function About(props:AboutProps) {

  const current_text_data = props.lang == "EN" ? about_text_data.en : about_text_data.de
  const content = current_text_data.about_content.map((item) => {
    return(
      <div key={item.header}>
        <h2>
          {item.header}
        </h2>
        {item.content ? <p>{item.content}</p>: <></>}
        {item.contents ? item.contents.map((subitem) => <p key={subitem}>{subitem}</p>) : <></>}
      </div>
    )
  })

  return (
    <main className="about">
      <div className="about--content-container">
        <h1 className="about--headline">
          {current_text_data.headline}
        </h1>
        {...content}
      </div>
    </main>
  )
}