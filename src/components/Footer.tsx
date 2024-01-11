import './../styles/Footer.css'

interface FooterText {
    content:string
    btn_about:string
    btn_contact:string
    btn_projects:string
}

interface FooterProps {
  text_data:FooterText
}

export default function Footer(props:FooterProps) {

  return (
    <footer>
        <div className="flex-container">
            <div>
                <a href="#">{props.text_data.btn_about}</a>
                <a href="#">{props.text_data.btn_contact}</a>
                <a href="#">{props.text_data.btn_projects}</a>
            </div>
            <div className="attribution">
                {props.text_data.content}
            </div>
            <div>
                <a href="#">GitHub</a>
                <a href="#">Frontend Mentor</a>
            </div>
        </div>
    </footer>
  )
}