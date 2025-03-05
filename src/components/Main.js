import './Main.css';
import { motion } from "framer-motion";
// import Memu from './Menu';
import Menu from './Menu.js';


// framer motion - 메인 소개 화면 문구 띄우기
const MainIntroduceAni = ({ initial, animate, duration, delay, children }) => {
    return (
        <motion.div
            initial={initial}
            animate={ animate}
            transition={{ duration, delay}}
        >
            {children}
        </motion.div>
    )
}
// 메인 소개 텍스트 컴포넌트
const MainIntroduce = () => {
    return (
        <div className="main-introduce common-flex">
            {/* <p className="main-introduce-name">안녕하세요</p> */}
            {/* <MainIntroduceAni delay={0.8} className="main-introduce-heading">
                안녕하세요.
            </MainIntroduceAni>
            <MainIntroduceAni delay={5} className="main-introduce-heading">
                프론트엔드 개발자 최지영입니다.
            </MainIntroduceAni> */}
        </div>
    )
}
const Main = () => {
    return (
        <div id="home" className="main-container common-flex">
            <MainIntroduce/>
            <Menu />
        </div>
    )
}

export default Main;