import { SetStateAction, useState } from "react";
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
                  <div className="project-btn--content">
                    <img src={Projects_Icon} alt=""/>
                    <p>{props.text_data.btn_projects}</p>
                  </div>
                </button>
                <p>{project.short}</p>
            </div>
        )
    })

    return (
        <section className="projects">
            {projectElements}
        </section>
    )
}