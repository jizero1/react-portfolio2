import './Menu.css';
import { Link, Element } from 'react-scroll';

const MenuNav = () => {
    return (
            <nav className="menu-nav common-flex">
                <li className="nav-home common-nav"><Link to="home" smooth={true} duration={500}>홈</Link></li>
                <li className="nav-aboutMe common-nav"><Link to="about" smooth={true} duration={500}>자기소개</Link></li>
                <li className="nav-project common-nav"><Link to="project" smooth={true} duration={500}>프로젝트</Link></li>
            </nav>
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