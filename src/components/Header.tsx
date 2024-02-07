import './../styles/Header.css'

interface HeaderProps {
  lang:string
  setPage:React.Dispatch<React.SetStateAction<string>>
  setLang:React.Dispatch<React.SetStateAction<string>>
}

export default function Header(props:HeaderProps) {

  return (
    <header>
      <div className="container">
        <div>
          <button onClick={() => props.setPage("Home")}>Home</button>
          <button onClick={() => props.setPage("About")}>{props.lang == "EN" ? "About me" : "Über mich"}</button>
          <a href="mailto:n.suton@web.de">{props.lang == "EN" ? "Contact" : "Kontakt"}</a>
        </div>
        <div className="lang-container">
          <button className={props.lang == "DE" ? "lang active" : "lang"} onClick={() => props.setLang("DE")}>DE</button>
          <button className={props.lang == "EN" ? "lang active" : "lang"} onClick={() => props.setLang("EN")}>EN</button>
        </div>
      </div>
    </header>
  )
}