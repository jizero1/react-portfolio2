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
        {name: "HTML5", icon: "/images/html5-Icon.svg"},
        {name: "CSS3", icon: "/images/css3-Icon.svg"},
        {name: "JavaScript", icon: "/images/javaScript-Icon.svg"},
        {name: "React", icon: "/images/react-Icon.svg"},
        {name: "ReactNative", icon: "/images/reactNative-Icon.svg"},
        {name: "Redux", icon: "/images/redux-Icon.svg"},
        {name: "GitHub", icon: "/images/github-Icon.svg"}
    ];
    return (
        <div className="skillImg-container">
            {skills.map((skill,index) => (
                <p key={index} className="common-skill-text common-flex">
                    <img className="common-skill-img"
                        src={skill.icon}
                        alt={`${skill.name}Icon`}
                    />
                    {skill.name}
                </p>
            ))}
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