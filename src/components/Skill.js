import './Skill.css';

const SkillTitle = () => {
    return (
        <div className="skillTitle-container common-flex">
            <p>Front-end Skill</p>
        </div>
    )
}
const SkillImg = () => {
    return (
        <div className="skillImg-container">
            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>HTML5</p>

            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>CSS3</p>
            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />JavaScript</p>

            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />React</p>
          
            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />Redux</p>
            <p className="common-skill-text common-flex"><img className="common-skill-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />Github</p>
          
          
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