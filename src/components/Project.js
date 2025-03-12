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
        { className: "projectCard-img common-img", img: "/images/personal.png", alt: "퍼스널컬러 테스트 이미지" },
        { className: "projectCard-img common-img", img: "/images/weather.png", alt: "실시간 날씨 이미지" },
        { className: "projectCard-img common-img", img: "/images/calendar.png", alt: "일기 캘린더 이미지" },
        { className: "projectCard-AppImg common-img", img: "/images/todoApp.jpeg", alt: "투두앱 이미지" }
    ]
    return (
        <div className="projectCard-container common-flex">
            {card.map((card, index) => (
                <div key={index} className="projectCard">
                    {/* 프로젝트 카드의 앞면 */}
                    <div className="projectCard-inner">
                        <div className="projectCard-front common-flex">
                            <img className={card.className} src={card.img} alt={card.alt}></img>
                            <p className="projectCard-name">프로젝트 이름</p>
                            <p className="projectCard-about common-flex">해당 프로젝트는 무엇무엇무엇무엇무엇~~~~을 하는 홈페이지입니다. ~~~어떤어떤 기술을 이용했으며, ~~~문제가 발생했을때 ~~~하여 해결 했고, ~~~에 대해 알게 된 프로젝트 입니다.</p>
                            <p className="projectCard-skill">사용기술 이미지. 가로로 나열</p>
                        </div>
                        {/* 프로젝트 카드의 뒷면 */}
                        <div className="projectCard-back">
                        </div>
                    </div>
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