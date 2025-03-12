import './Main.css';
import { motion } from "framer-motion";
import Menu from './Menu.js';
import { Link } from 'react-scroll';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const MainUpBtn = () => {
    return (
      <div className="mainUp-container common-flex">
        <Link to="home" smooth={true} duration={800}><FaAngleUp/></Link>
      </div>
    )
  }

// framer motion - 메인 소개 화면 문구 띄우기
const MainIntroduceAni = ({ initial, animate, duration, delay, children }) => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{duration: duration, delay: delay}}
        >
            {children}
        </motion.div>
    )
}
// 메인 소개 텍스트 컴포넌트
const MainIntroduce = () => {
    return (
        <div className="main-introduce common-flex">
            <div className="main-introduce-text-container common-flex">
            <MainIntroduceAni
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                duration="2"
                delay="0.5"
            >
                <p className="main-introduce-text">안녕하세요, <br/> 프론트엔드 개발자 <span className="main-introduce-text-name">최지영</span>입니다.</p>
            </MainIntroduceAni>
            </div>
            <div className="main-introduce-backText-container common-flex">
            <MainIntroduceAni
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                duration="1"
                delay="1.5"
               >
                <p className="main-introduce-backText">Front-end Developer</p>
            </MainIntroduceAni>
            </div>
        </div>
    )
}
// 스크롤 아이콘 
const MainScrollIcon = () => {
    return (
        <MainIntroduceAni
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            duration="1"
            delay="1.5"
        >
            <FaAngleDoubleDown className="main-scroll"/>
        </MainIntroduceAni>
    )
}
const Main = () => {
    return (
        <div id="home" className="main-container common-flex">
            <MainIntroduce/>
            <Menu />
            <MainScrollIcon/>
            <MainUpBtn></MainUpBtn>
        </div>
    )
}

export default Main;