import logo from '../assets/logo.png'
import '../NavBar.css'

export default function NavBar() {
    return (
        <div className="navBar">

            <img src={logo} alt="logo" />

            <h2 className="user">Bienvenido usuario</h2>
        </div>
    );
}