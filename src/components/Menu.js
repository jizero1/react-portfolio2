import './Menu.css';

const MenuNav = () => {
    return (
        <div className="menu-container common-flex">
            <nav className="menu-nav common-flex">
                <li className="nav-main common-nav-margin">Home</li>
                <li className="nav-aboutMe common-nav-margin">About me</li>
                <li className="nav-portfolio common-nav-margin">PortFolio</li>
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