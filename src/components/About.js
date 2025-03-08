import './About.css';
import { FaBirthdayCake } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

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
            <p>머릿속의 아이디어를 화면에 구현할 수 있다는 점에 매력을 느껴 프론트엔드 개발자라는 꿈을 가지게 되었습니다. <br/>
                항상 사용자 경험을 최우선으로 생각하며, 직관적이고 접근성 높은 인터페이스를 구현하기 위해 노력합니다. <br/>
                새로운 기술과 도전을 두려워하지 않으며, 문제 해결 과정에서 성장하는 것을 즐깁니다. <br/>
                끊임없이 배우고 발전하여 사용자에게 가치를 전달할 수 있는 프론트엔드 개발자가 되겠습니다. <br/>
            </p>
        </div>
    )
}
const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-profile-container common-flex">
                <ProfileImg />
                <ProfileText />
            </div>
            <ProfileIntroduceText />

        </div>
    )
}

export default About;