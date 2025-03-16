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
        { id: 0, projectName: "퍼스널컬러 테스트", projectAbout: "퍼스널컬러에 대한 소개 및 테스트를 할 수 있는 페이지 입니다. React Router을 사용하여 페이지간 이동을 관리 하였고, 테스트는 웜/쿨처럼 큰 틀로 나누어 테스트 진행 후, 세부테스트로 이동하여 테스트의 정확도를 높이고자 하였습니다.",
             skill: ['React','React Router'], className: "projectCard-img common-img", img: "/images/personal.png", alt: "퍼스널컬러 테스트 이미지" },
        { id: 1, projectName: "실시간 날씨", projectAbout: "OpenWeather API를 이용하여 사용자의 현재위치 기반으로 날씨 정보를 불러오는 페이지 입니다. 날씨 상태에 따라 날씨 이모티콘을 변경하여 사용자가 쉽게 이해 하고 확인 할 수 있도록 하였고, 비동기 데이터 관리와 API연동을 위해 node.js를 사용하여 서버를 구축 하였습니다.",
            skill: ['React','React Router'], className: "projectCard-img common-img", img: "/images/weather.png", alt: "실시간 날씨 이미지" },
        { id: 2, projectName: "달력 일기", projectAbout: "현재 날짜를 확인하고, 이전달/다음달로 이동하는 달력 기능에 일기 기능을 더한 페이지 입니다. 날짜 클릭시 해당 날짜에 이미지와 텍스트를 추가하여 일기처럼 달력을 사용 할 수 있습니다. 또한, localStorage로 데이터를 관리 하여 새로고침 하거나 달력 이동시에도 데이터가 유지 되게 하였습니다.",
            skill: ['React','React Router'], className: "projectCard-img common-img", img: "/images/calendar.png", alt: "일기 캘린더 이미지" },
        { id: 3, projectName: "하루토마토 (ToDo App)", projectAbout: "날짜별로 할 일을 기록/관리하는 앱 입니다. 토마토 아이콘으로 할 일을 체크할 수 있고, 5가지 색상과 표정의 아이콘으로 기분 표시도 가능 합니다. 또한, AsyncStorage를 이용하여 앱에 데이터가 유지되도록 하였습니다.",
            skill: ['React','React Router'], className: "projectCard-AppImg common-img", img: "/images/todoApp.jpeg", alt: "투두앱 이미지" }
    ]
    return (
        <div className="projectCard-container common-flex">
            {card.map((card) => (
                <div key={card.id} className="projectCard-list">
                    <img className={card.className} src={card.img} alt={card.alt}></img>
                    <p className="projectCard-name">{card.projectName}</p>
                    <p className="projectCard-about">{card.projectAbout}</p>
                    <div className="projectCard-skillContainer common-flex">
                        {card.skill.map((skill) => (
                            <p key={skill} className="projectCard-skill common-flex">{skill}</p>
                        ))}
                        {/* <p className="projectCard-skill common-flex">HTML</p>
                        <p className="projectCard-skill common-flex">React</p>
                        <p className="projectCard-skill common-flex">HTML</p>
                        <p className="projectCard-skill common-flex">HTML</p> */}
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