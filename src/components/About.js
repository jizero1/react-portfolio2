import './About.css';
import { FaBirthdayCake, FaSchool, FaCertificate, FaEnvelope, FaGithub, FaPencilAlt } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

// 원형 이모지(이미지)
const ProfileImg = () => {
    return (
        <div className="profile-img-container">
            <img className="profile-img" src="/images/profileImg.png" alt="프로필 이미지"></img>
        </div>
    )
}
// 이미지 옆 프로필 텍스트
const ProfileText = () => {
    return (
        <div className="profile-text-container">
            <p className="profile-name">최지영<span className="profile-name-eng">Choi Ji Young</span></p>
            <p className="common-iconText"><FaBirthdayCake className="common-icon"></FaBirthdayCake>1999.01.06</p>
            <p className="common-iconText"><FaSchool className="common-icon"></FaSchool>전주대학교 경영학과 & 스마트미디어학과</p>
            <p className="common-iconText"><FaCertificate className="common-icon"></FaCertificate>2023.06 정보처리기사 자격증 취득</p>
            <p className="common-iconText"><FaEnvelope className="common-icon"></FaEnvelope>wlduddl4101@gmail.com</p>
            <p className="common-iconText"><FaPencilAlt className="common-icon"></FaPencilAlt>https://blog.naver.com/jibbbang2</p>
            <p className="common-iconText"><FaGithub className="common-icon"></FaGithub>https://github.com/jizero1</p>
        </div>
    )
}
// 자기소개 텍스트
const ProfileIntroduceText = () => {
    return (
        <div className="profile-introduce-container common-flex">
            <p className="profile-introduce-text">
                머릿속의 아이디어를 화면에 구현할 수 있다는 점에 매력을 느껴 프론트엔드 개발자라는 꿈을 가지게 되었습니다. <br/>
                새로운 프로젝트를 만들 때마다 기존 프로젝트에서 새로 배운 기술들을 활용하거나 부족했던 점들을 보완 해나가며 개발 역량을 쌓았습니다. <br/>
                개발 도중 문제가 발생하면, 해결을 위해 몇 날 며칠동안 포기하지 않고 고민하였고, 이러한 경험을 통해<br/>
                또 다른 문제를 마주해도 언제든 해결 할 수 있다는 자신감이 생기게 되었습니다.<br/>
                앞으로도 끊임없이 성장하여 회사에 도움이 될 수 있는 인재가 되도록 노력하겠습니다. 
            </p>
        </div>
    )
}
const About = () => {
    return (
        <div id="about" className="about-container common-flex">
            <div className="about-profile-container common-flex">
                <ProfileImg />
                <ProfileText />
            </div>
            <div className="about-introduce-container common-flex">
                <FaQuoteLeft className="about-quoteLeft common-quote"></FaQuoteLeft>
                <ProfileIntroduceText />
                <FaQuoteRight className="about-quoteRight common-quote"></FaQuoteRight>
            </div>


        </div>
    )
}

export default About;