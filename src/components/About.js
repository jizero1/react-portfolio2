import './About.css';

const ProfileImg = () => {
    return (
        <div className="profile-img-container">
            <img src="/images/profileImg.png" alt="프로필 이미지"></img>
        </div>
    )
}
const About = () => {
    return (
        <div id="about" className="about-container">
            <ProfileImg/>
        </div>
    )
}

export default About;