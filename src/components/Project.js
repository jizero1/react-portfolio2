import './Project.css';

const ProjectTitle = () => {
    return (
        <div className="projectTitle-container common-flex">
            <p>project</p>
        </div>
    )
}
const Project = () => {
    return (
        <div id="project" className="project-container">
            <ProjectTitle/>
        </div>
    )
}

export default Project;