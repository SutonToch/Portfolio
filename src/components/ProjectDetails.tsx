import './../styles/ProjectDetails.css'

interface DetailItem {
    title:string,
    content:string,
    list?:Array<string>
}

interface ProjectElement {
    title:string,
    state:string,
    imgPath:string,
    stack:Array<string>,
    liveURL:string,
    github:string,
    short:Array<string>
    details:Array<DetailItem>
}

interface ProjectDetailsProps {
    details:ProjectElement
    btn_start:string
    shiftActiveProjectDetailsIndex:(shift: number) => void
}

export default function ProjectDetails(props:ProjectDetailsProps) {

    const projectElements = props.details.details.map((detailItem) => {
        return(
            <div key={detailItem.title}>
                <h2>{detailItem.title}</h2>
                <p>{detailItem.content}</p>
                {detailItem.list != undefined ? 
                <ul>
                    {detailItem.list.map((item) => <li key={item}>{item}</li>)}
                </ul> 
                : <></>}
            </div>
        )
    })

    return (
        <main className="project-details">
            <div className="project-details-content-container">
                <div className="project-title-container">
                    <div className="arrow" onClick={() => props.shiftActiveProjectDetailsIndex(-1)}/>
                    <h1 className="projects-title">{props.details.title}</h1>
                    <div className="arrow" onClick={() => props.shiftActiveProjectDetailsIndex(1)}/>
                </div>
                <div className="stack-container">
                        {props.details.stack.map((x) => <div className="stack-element" key={x}>{x}</div>)}
                </div>
                <img src={props.details.imgPath} alt=""/>
                <div className="btn-wrapper">
                    {props.details.liveURL != "" ? 
                        <a className="project-start" href={props.details.liveURL} target={'_blank'}>
                            <button className="project-btn">{props.btn_start}</button>
                        </a> : 
                        <></>
                    }
                    <a className="project-start" href={props.details.github} target="_blank">
                        <button className="project-btn">
                            Code
                        </button>
                    </a>
                </div>
                <div className="project-elements-container">
                    {projectElements}
                </div>
            </div>
        </main>
    )
}