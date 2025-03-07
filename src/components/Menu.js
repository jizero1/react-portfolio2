import './Menu.css';
import { Link, Element } from 'react-scroll';
import {motion} from 'framer-motion';
import React, { useState } from 'react';

const MenuNav = () => {
    const [fontSize, setFontSize] = useState(0);
    const handleAnimationComplete = () => {
        setFontSize(18);
    }
    return (
        <motion.div
        initial={{ opacity: 0, width: 0, fontSize: 0}}
        animate={{ opacity: 1, width: 300}}
        transition={{duration: 1, delay: 1.5}}
        onAnimationComplete={handleAnimationComplete}
        className="menu-nav common-flex"
        >
            <ul className="menu-ul common-flex" style={{fontSize: fontSize}}>
                <li className="nav-home common-nav common-flex"><Link to="home" smooth={true} duration={500}>홈</Link></li>
                <li className="nav-aboutMe common-nav common-flex"><Link to="about" smooth={true} duration={500}>자기소개</Link></li>
                <li className="nav-project common-nav common-flex"><Link to="project" smooth={true} duration={500}>프로젝트</Link></li>
            </ul>
            </motion.div>
    )
}
const Menu = () => {
    return(
        <div className="menu-container common-flex">
            <MenuNav/>
        </div>
    )
}

export default Menu;