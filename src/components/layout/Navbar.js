import Container from "../Container"
import style from "./Navbar.module.css"
import Redes from "./Redes"

function Navbar() {
    return (
        <header className={style.NavBar_Container}>
            <Redes />
            <span>Matheus</span>
            <nav>
            <li><a href="#">Sobre min</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Projetos</a></li>
            </nav>
        </header>
    )
}

export default Navbar