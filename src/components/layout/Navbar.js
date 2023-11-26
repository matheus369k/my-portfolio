import { useEffect, useState } from "react"
import style from "./Navbar.module.css"
import Redes from "./Redes"

function Navbar() {

    return (
        <header className={style.NavBar_Container}>
            <Redes />
            <span>Matheus</span>
            <nav>
                <li>Sobre min</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </nav>
        </header>
    )
}

export default Navbar