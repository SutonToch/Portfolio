import './../styles/ProjectDetails.css'

interface ProjectElement {
    title:string,
    state:string,
    imgPath:string,
    stack:Array<string>,
    liveURL:string,
    short:Array<string>
}

interface ProjectDetailsProps {
    details:ProjectElement
}

export default function ProjectDetails(props:ProjectDetailsProps) {

    return (
        <main className="project-details">
            <div className="project-details-content-container">
            <h1 className="projects-title">{props.details.title}</h1>
            <div className="stack-container">
                    {props.details.stack.map((x) => <div className="stack-element">{x}</div>)}
            </div>
            <img src={props.details.imgPath} alt=""/>
            <button className="project-btn">
                placeholder
            </button>
            <h2>Placeholder Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!</p>
            <h2>Placeholder Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!</p>
            <h2>Placeholder Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus velit libero, suscipit quasi provident quod officiis exercitationem voluptatibus fuga, aperiam aspernatur quidem earum, distinctio molestias sequi? Explicabo aut velit modi commodi assumenda in nemo, expedita maiores adipisci laboriosam sunt? Tenetur corrupti inventore rem possimus quidem esse iste, eaque voluptas quam molestiae fuga, veniam, consequuntur doloribus quibusdam nemo adipisci libero? In pariatur aspernatur, accusamus quisquam dicta deserunt labore maiores distinctio ipsam eligendi veniam culpa mollitia modi porro, incidunt, et adipisci. Libero eum ipsum vel necessitatibus eius facere nemo iste aliquam eligendi, illum est. Deleniti eius aspernatur rerum, laudantium harum explicabo!</p>
            </div>
        </main>
    )
}