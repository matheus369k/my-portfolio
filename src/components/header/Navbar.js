import "./Navbar.css"
import Redes from "../layout/Redes"

import { useEffect, useState } from 'react';

function Navbar() {

  const handleScroll = (c, scroll='auto') => {

    if (scroll === 'auto') {

      document.body.scroll(0, c)
    }
    
    const navList = document.querySelector(".Navbar")

    let scrolltop = document.body.scrollTop

    if (scrolltop < 500 && !navList.children[0].classList.contains('select')) {

      document.querySelector(".select").classList.remove("select")

      navList.childNodes[0].classList.add("select")

    } else if (scrolltop > 500 && scrolltop < 1250 && !navList.children[1].classList.contains('select')) {

      document.querySelector(".select").classList.remove("select")

      navList.childNodes[1].classList.add("select")

    } else if (scrolltop > 1250 && !navList.children[2].classList.contains('select')) {

      document.querySelector(".select").classList.remove("select")

      navList.childNodes[2].classList.add("select")
    }
  }

  document.body.addEventListener("scroll", () => {

    handleScroll(document.body.scrollTop, 'scrollmanual')

  })
  

  console.log('render navbar')

  useEffect(() => {

  }, [])

  return (
    <header className="NavBar_Container">
      <Redes />
      <span className="name">Matheus</span>
      <nav className="Navbar">
        <li className="select" onClick={(c) => handleScroll(0)}>Sobre min</li>
        <li onClick={(c) => handleScroll(850)}>Habilidades</li>
        <li onClick={(c) => handleScroll(1850)}>Projetos</li>
      </nav>
    </header>
  )
}

export default Navbar