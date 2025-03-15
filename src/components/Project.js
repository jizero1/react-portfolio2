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
        { projectName: "퍼스널컬러 테스트", projectAbout: "퍼스널컬러에 대한 소개 및 테스트를 할 수 있는 페이지 입니다. React Router을 사용하여 페이지간 이동을 관리 하였고, 테스트는 큰 틀로 웜/쿨로 나누어 테스트 후, 세부테스트로 이동하여 테스트의 정확도를 높이고자 하였습니다.", className: "projectCard-img common-img", img: "/images/personal.png", alt: "퍼스널컬러 테스트 이미지" },
        { projectName: "실시간 날씨", projectAbout: "", className: "projectCard-img common-img", img: "/images/weather.png", alt: "실시간 날씨 이미지" },
        { projectName: "달력 일기", projectAbout: "", className: "projectCard-img common-img", img: "/images/calendar.png", alt: "일기 캘린더 이미지" },
        { projectName: "하루토마토 (ToDo App)", projectAbout: "", className: "projectCard-AppImg common-img", img: "/images/todoApp.jpeg", alt: "투두앱 이미지" }
    ]
    return (
        <div className="projectCard-container common-flex">
            {card.map((card, index) => (
                <div key={index} className="projectCard-list">
                    <img className={card.className} src={card.img} alt={card.alt}></img>
                    <p className="projectCard-name">{card.projectName}</p>
                    <p className="projectCard-about">{card.projectAbout}</p>
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