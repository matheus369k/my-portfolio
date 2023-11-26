import { useEffect, useState } from "react"
import"./Navbar.css"
import Redes from "./Redes"

function Navbar() {

    const [scrollY, setScrollY]=useState(0)

    const handleScroll=(c)=>{
        document.body.scroll(0, c)
        setScrollY(document.body.scrollTop)
    }
    
    document.body.addEventListener("scroll", ()=>{
        setScrollY(document.body.scrollTop)
    })

    useEffect(()=>{
        const navList = document.querySelector("nav.Navbar")

        document.querySelector(".select").classList.remove("select")

        if (scrollY < 450) {

            navList.childNodes[0].classList.add("select")

        } else if (scrollY < 1050) {

            navList.childNodes[1].classList.add("select")

        } else{

            navList.childNodes[2].classList.add("select")
        }

    }, [scrollY])

    return (
        <header className="NavBar_Container">
            <Redes />
            <span className="name">Matheus</span>
            <nav className="Navbar">
                <li className="select" onClick={(c)=>handleScroll(0)}>Sobre min</li>
                <li onClick={(c)=>handleScroll(450)}>Habilidades</li>
                <li onClick={(c)=>handleScroll(1100)}>Projetos</li>
            </nav>
        </header>
    )
}

export default Navbar