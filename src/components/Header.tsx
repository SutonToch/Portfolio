import './../styles/Header.css'

interface HeaderProps {
  lang:string
  changePage:(destination: string) => void
  setLang:React.Dispatch<React.SetStateAction<string>>
}

export default function Header(props:HeaderProps) {

  return (
    <header>
      <div className="container">
        <div>
          <button onClick={() => props.changePage("Home")}>{props.lang == "EN" ? "Home" : "Startseite"}</button>
          <button onClick={() => props.changePage("About")}>{props.lang == "EN" ? "About me" : "Über mich"}</button>
          <a href="mailto:n.suton@web.de">{props.lang == "EN" ? "Contact" : "Kontakt"}</a>
        </div>
        <div className="lang-container">
          <button className={props.lang == "DE" ? "lang active" : "lang"} onClick={() => props.setLang("DE")}>DE</button>
          <div className="separator"></div>
          <button className={props.lang == "EN" ? "lang active" : "lang"} onClick={() => props.setLang("EN")}>EN</button>
        </div>
      </div>
    </header>
  )
}