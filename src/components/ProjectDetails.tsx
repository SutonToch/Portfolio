import './../styles/ProjectDetails.css'

interface DetailItem {
    title:string,
    content:string
}

interface ProjectElement {
    title:string,
    state:string,
    imgPath:string,
    stack:Array<string>,
    liveURL:string,
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
            <div>
                <h2>{detailItem.title}</h2>
                <p>{detailItem.content}</p>
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
                        {props.details.stack.map((x) => <div className="stack-element">{x}</div>)}
                </div>
                <img src={props.details.imgPath} alt=""/>
                <button className="project-btn">
                    {props.btn_start}
                </button>
                {projectElements}
            </div>
        </main>
    )
}