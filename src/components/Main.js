import './Main.css';
import { motion } from "framer-motion";
// import Memu from './Menu';
import Menu from './Menu.js';


// framer motion - 메인 소개 화면 문구 띄우기
const MainIntroduceAni = ({ children, delay, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay }}
            className={className}
        >
            <p>{children}</p>
        </motion.div>
    )
}
// 메인 소개 화면
const MainIntroduce = () => {
    return (
        <div className="main-introduce">
            <p className="main-introduce-name">CHOI JIYOUNG</p>
            <MainIntroduceAni delay={0.8} className="main-introduce-heading">
                Front-end Developer
            </MainIntroduceAni>
            <MainIntroduceAni delay={1.6} className="main-introduce-heading">
                PortFolio
            </MainIntroduceAni>
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