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
    title:string
    btn_projects:string
    btn_start:string
}

interface ProjectsProps {
  text_data:ProjectsText
  changePage:(destination: string) => void
}

export default function Projects(props:ProjectsProps) {

    const projectElements = props.text_data.projects.map((project) => {
        return(
            <article className="project-container">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-filler"></div>
                <div className="stack-container">
                    {project.stack.map((x) => <div className="stack-element">{x}</div>)}
                </div>
                <button className="project-btn" onClick={() => props.changePage(project.state)}>
                    {props.text_data.btn_projects}
                </button>
                {project.liveURL != "" ? 
                    <a className="project-start" href={project.liveURL} target={'_blank'}>
                        <button className="project-btn">{props.text_data.btn_start}</button>
                    </a> : 
                    <></>
                }
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