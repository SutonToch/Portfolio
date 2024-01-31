import './../styles/Projects.css'
import Projects_Icon from './../assets/icons/clipboard-text_darkblue.png'

interface ProjectElement {
    title:string,
    state:string,
    imgPath:string,
    stack:Array<string>,
    liveURL:string,
    short:Array<string>
}

interface ProjectsText {
    projects:Array<ProjectElement>
    btn_projects:string
    title:string
}

interface ProjectsProps {
  text_data:ProjectsText
  setPage:React.Dispatch<React.SetStateAction<string>>
}

export default function Projects(props:ProjectsProps) {

    const projectElements = props.text_data.projects.map((project) => {
        return(
            <div className="project-container">
                <h2 className="project-title">{project.title}</h2>
                <div className="stack-container">
                    {project.stack.map((x) => <div className="stack-element">{x}</div>)}
                </div>
                <button className="project-btn" onClick={() => props.setPage(project.state)}>
                    <img src={Projects_Icon} alt=""/>
                    <p>{props.text_data.btn_projects}</p>
                </button>
                <p className="project-short">{project.short}</p>
                <img className="project-img" src={project.imgPath} alt=""/>
            </div>
        )
    })

    return (
        <section className="projects">
            <h1 className="projects-title">{props.text_data.title}</h1>
            {projectElements}
        </section>
    )
}