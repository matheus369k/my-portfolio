import "./Navbar.css"
import Redes from "./Redes"

import { useEffect, useState } from 'react';

function Navbar() {

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = (c) => {
    document.body.scroll(0, c)
  }

  document.body.addEventListener("scroll", () => {

    if (document.body.scrollTop === 750) {

      setScrollY(document.body.scrollTop)

    } else if (document.body.scrollTop === 1450) {


      setScrollY(document.body.scrollTop)

    }
  })
  

  console.log('render navbar')

  useEffect(() => {
    const navList = document.querySelector("nav.Navbar")

    document.querySelector(".select").classList.remove("select")

    if (scrollY < 450) {

      navList.childNodes[0].classList.add("select")

    } else if (scrollY < 1150) {

      navList.childNodes[1].classList.add("select")

    } else {

      navList.childNodes[2].classList.add("select")
    }

  }, [])

  return (
    <header className="NavBar_Container">
      <Redes />
      <span className="name">Matheus</span>
      <nav className="Navbar">
        <li className="select" onClick={(c) => handleScroll(0)}>Sobre min</li>
        <li onClick={(c) => handleScroll(750)}>Habilidades</li>
        <li onClick={(c) => handleScroll(1450)}>Projetos</li>
      </nav>
    </header>
  )
}

export default Navbar