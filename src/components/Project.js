import './Project.css';
import React, { useState} from 'react';
const ProjectTitle = () => {
    return (
        <div className="projectTitle-container common-flex">
            <p>project</p>
        </div>
    )
}

const ProjectCard = () => {

    const handleClick = (url) => {
        if (url === "") {
            alert("이 프로젝트는 private로 비공개 되어있습니다.");
        } else {
            window.open(url,"_blank");
        }
    }


    const card = [
        { id: 0, projectName: "퍼스널컬러 테스트", projectAbout: "퍼스널 컬러에 대한 소개 및 테스트를 할 수 있는 페이지 입니다. 테스트는 웜/쿨 큰 틀로 나누어 테스트 진행 후, 세부테스트로 이동하여 테스트의 정확도를 높였습니다. 해당 프로젝트에서 React Router을 사용하여 페이지간 이동을 관리하는 방법을 배웠습니다.",
             skill: ['React','React Router'], className: "projectCard-img common-img", img: "/images/personal.png", alt: "퍼스널컬러 테스트 이미지",
            pageLink: "https://jizero1.github.io/project-personal/", gitHubLink: "https://github.com/jizero1/project-personal" },
        { id: 1, projectName: "실시간 날씨", projectAbout: "OpenWeather API를 사용하여 사용자 현재위치 기반으로 날씨 정보를 불러오는 페이지 입니다. 날씨 상태에 따라 이모티콘을 다르게 하여 사용자가 날씨 정보를 한눈에 확인 할 수 있도록 하였으며, 비동기 데이터 관리와 API연동을 위해 Node.js를 사용하여 서버를 구축을 하였습니다.",
            skill: ['JavaScript','OpenWeather API', 'Node.js'], className: "projectCard-img common-img", img: "/images/weather.png", alt: "실시간 날씨 이미지",
            pageLink: "https://weather-project-peach-xi.vercel.app", gitHubLink: "https://github.com/jizero1/weather" },
        { id: 2, projectName: "달력 일기", projectAbout: "평범한 달력 기능에 이미지/텍스트를 추가할 수 있게하여 일기처럼 달력을 사용할 수 있도록 만든 페이지 입니다. LocalStorage로 데이터를 관리하여 페이지를 새로고침 하거나 달력 이동시에도 데이터가 유지되도록 하였습니다.",
            skill: ['JavaScript','LocalStorage'], className: "projectCard-img common-img", img: "/images/calendar.png", alt: "일기 캘린더 이미지",
            pageLink: "https://jizero1.github.io/CalendarDiary/", gitHubLink: "https://github.com/jizero1/CalendarDiary" },
        { id: 3, projectName: "하루토마토", projectAbout: "할일을 기록 할 수 있는 Android 앱 입니다. 다른 Todo앱과의 차별점은 체크표시가 일반적인 체크표시가 아닌 귀여운 토마토 아이콘이라는 점 입니다. 할일 체크 및 기분 표시 부분에 토마토 아이콘을 활용하여 사용자가 재미있게 할일을 관리할 수 있도록 하였습니다.",
            skill: ['React','ReactNative','AsyncStorage'], className: "projectCard-AppImg common-img", img: "/images/todoApp.jpeg", alt: "투두앱 이미지",
            pageLink: "https://play.google.com/store/apps/details?id=com.jizerotodo&pli=1", gitHubLink: "" }
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
                    </div>
                    <div className="projectCard-listHover common-flex">
                        <button className="common-listBtn"><a href={card.pageLink} target='_blank'>자세히 보기</a></button>
                        <button className="common-listBtn" onClick={() => handleClick(card.gitHubLink)}>GitHub 이동</button>
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