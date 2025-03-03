import './Main.css';
import { motion } from "framer-motion";

const Main = () => {
    return (
        <div className="main-container common-flex">
            <div className="main-introduce">
                <p className="main-introduce-name">CHOI JIYOUNG</p>
                <motion.div
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 1, delay: 0.8}}
                    className="main-introduce-heading"
                >
                    <p>Front-end Developer</p>
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 1, delay: 1.6}}
                    className="main-introduce-heading"
                >
                    <p>portfolio</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Main;