import"./Navbar.css"
import Redes from "./Redes"

function Navbar({ handleScroll }) {
    return (
        <header className="NavBar_Container">
            <Redes />
            <span className="name">Matheus</span>
            <nav className="Navbar">
                <li className="select" onClick={(c)=>handleScroll(0)}>Sobre min</li>
                <li onClick={(c)=>handleScroll(550)}>Habilidades</li>
                <li onClick={(c)=>handleScroll(1250)}>Projetos</li>
            </nav>
        </header>
    )
}

export default Navbar