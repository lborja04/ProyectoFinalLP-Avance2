import logo from '../assets/logo.png'
import search_icon from '../assets/search-b.png'
import '../NavBar.css'

export default function NavBar() {
    return (
        <div className="navBar">

            <img src={logo} alt="logo" />


            <ul>
                <li>Categorias</li>
                <li>Ofertas</li>
                <li>Tendencias</li>
                <li>Nuevo</li>
            </ul>

            <div className="search-box">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="" />
            </div>

            <p>Usuario</p>
        </div>
    );
}