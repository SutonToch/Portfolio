import './../styles/Footer.css'

interface FooterText {
    content:string
    btn_about:string
    btn_contact:string
}

interface FooterProps {
  text_data:FooterText
  changePage:(destination: string) => void
}

export default function Footer(props:FooterProps) {

  return (
    <footer>
        <div className="container">
            <div>
                <a onClick={() => props.changePage("About")}>{props.text_data.btn_about}</a>
                <a href="mailto:paul.pfuetze@gmx.de">{props.text_data.btn_contact}</a>
            </div>
            <div className="attribution">
                {props.text_data.content}
            </div>
            <div>
                <a href="https://github.com/SutonToch" target="_blank">GitHub</a>
                <a href="https://www.frontendmentor.io/profile/SutonToch" target="_blank">Frontend Mentor</a>
            </div>
        </div>
    </footer>
  )
}