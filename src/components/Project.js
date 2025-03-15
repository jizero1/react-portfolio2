import './Project.css';

const ProjectTitle = () => {
    return (
        <div className="projectTitle-container common-flex">
            <p>project</p>
        </div>
    )
}

const ProjectCard = () => {
    const card = [
        { projectName: "퍼스널컬러 테스트", className: "projectCard-img common-img", img: "/images/personal.png", alt: "퍼스널컬러 테스트 이미지" },
        { projectName: "실시간 날씨", className: "projectCard-img common-img", img: "/images/weather.png", alt: "실시간 날씨 이미지" },
        { projectName: "달력 일기", className: "projectCard-img common-img", img: "/images/calendar.png", alt: "일기 캘린더 이미지" },
        { projectName: "하루토마토 (ToDo App)", className: "projectCard-AppImg common-img", img: "/images/todoApp.jpeg", alt: "투두앱 이미지" }
    ]
    return (
        <div className="projectCard-container common-flex">
            {card.map((card, index) => (
                <div key={index} className="projectCard-list">
                    <img className={card.className} src={card.img} alt={card.alt}></img>
                    <p className="projectCard-projectName">{card.projectName}</p>
                </div>
            ))}

        </div>
    )
}
const Project = () => {
    return (
        <div id="project" className="project-container common-flex">
            <ProjectTitle />
            <ProjectCard />
        </div>
    )
}

export default Project;