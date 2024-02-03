import './../styles/Projects.css'

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
            <article className="project-container">
                <h2 className="project-title">{project.title}</h2>
                <div className="stack-container">
                    {project.stack.map((x) => <div className="stack-element">{x}</div>)}
                </div>
                <div className="project-btns">
                    <button className="project-btn" onClick={() => props.setPage(project.state)}>
                        {props.text_data.btn_projects}
                    </button>
                    {project.liveURL != "" ? 
                        <a href={project.liveURL}>
                            <button className="project-btn">Live</button>
                        </a> : 
                        <></>
                    }
                </div>
                <div className="project-short">
                    {project.short.map((paragraph) => <p>{paragraph}</p>)}
                </div>
                <img className="project-img" src={project.imgPath} alt=""/>
            </article>
        )
    })

    return (
        <section className="projects">
            <div className="container">
                <h1 className="projects-title">{props.text_data.title}</h1>
                {projectElements}
            </div>
        </section>
    )
}