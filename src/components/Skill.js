import './Skill.css';

const SkillTitle = () => {
    return (
        <div className="skillTitle-container common-flex">
            <p>Front-end Skill</p>
        </div>
    )
}
const SkillImg = () => {
    const skills = [
        {name: "HTML5", icon: "/images/html5-Icon.svg", text: "시맨틱 마크업을 사용하여 접근성을 고려한 웹 구조 설계 및 다양한 레이아웃 구현이 가능 합니다."},
        {name: "CSS3", icon: "/images/css3-Icon.svg", text: "반응형 디자인을 구현하고, 애니메이션을 활용하여 UI요소들을 효과적으로 스타일링 할 수 있습니다."},
        {name: "JavaScript", icon: "/images/javaScript-Icon.svg", text: "ES6+ 문법 활용 및 DOM 조작을 할 수 있고, API 연동으로 동적 웹 페이지 개발할 수 있습니다."},
        {name: "React", icon: "/images/react-Icon.svg", text: "컴포넌트 기반 UI 개발과 상태 관리 경험이 있으며, Hooks를 활용한 SPA 개발 및 최적화 경험이 있습니다."},
        {name: "ReactNative", icon: "/images/reactNative-Icon.svg", text: "기본 모바일 앱 UI구성 및 간단한 기능 구현 가능하며, 안드로이드 앱 출시 경험이 있습니다."},
        {name: "Redux", icon: "/images/redux-Icon.svg", text: "기본 개념을 이해하고 있으며, 간단한 상태관리 기능을 구현 한 경험이 있습니다."},
        {name: "GitHub", icon: "/images/github-Icon.svg", "text": "Git을 사용하여 버전관리를 하고있으며, GitHub을 활용한 프로젝트 관리가 가능 합니다."}
    ];
    return (
        <div className="skillImg-container common-flex">
            <ul className="skill-list">
            {skills.map((skill,index) => (
                <li key={index} className="common-skill-text common-flex">
                    <img className="common-skill-img"
                        src={skill.icon}
                        alt={`${skill.name}Icon`}
                    />
                    <span className="skill-name">{skill.name} /</span>
                    <p classname="skill-text">{skill.text}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

const Skill = () => {
    return (
        <div id="skill" className="skill-container common-flex">
            <SkillTitle/>
            <SkillImg/>
        </div>
    )
}

export default Skill;