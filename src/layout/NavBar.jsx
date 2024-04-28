import { Link } from "react-router-dom"
import Cart from "../components/Cart"
import Logos from "../components/Logo"

function NavBar() {
    return (
        <header className="navbar__container">
            <div className="navbar__wrapper">                
                <Logos />
            <nav className="nav__menu">
                <div className="d-list">
                    <ul>
                        <li>

                            <Link to="/contact">Contactanos</Link>
                        </li>
                        <li>

                            <Link to="/Register">Alta de Productos</Link>
                        </li>
                        <li>

                            <Link to="/Aboutus">Nosotros</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <Cart />
            </div>
            </div>

        </header>
    )
}

export default NavBar