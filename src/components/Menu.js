import './Menu.css';
import { Link, Element } from 'react-scroll';

const MenuNav = () => {
    return (
        <div className="menu-container common-flex">
            <nav className="menu-nav common-flex">
                <li className="nav-main common-nav-margin"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="nav-aboutMe common-nav-margin"><Link to="about" smooth={true} duration={500}>About me</Link></li>
                <li className="nav-portfolio common-nav-margin"><Link to="portfolio" smooth={true} duration={500}>PortFolio</Link></li>
            </nav>
        </div>
    )
}
const Menu = () => {
    return(
        <div>
            <MenuNav/>
        </div>
    )
}

export default Menu;