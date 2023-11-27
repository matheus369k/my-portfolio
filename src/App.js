import { Fragment, useEffect, useState } from 'react';

import Navbar from './components/layout/Navbar';
import AboutMe from './pages/AboutMe';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Footer from './components/layout/Container_Footer';

function App() {

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = (c) => {
    document.body.scroll(0, c)
    setScrollY(document.body.scrollTop)
  }

  document.body.addEventListener("scroll", () => {
    setScrollY(document.body.scrollTop)
  })

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

  }, [scrollY])

  return (
    <Fragment>
      <Navbar handleScroll={handleScroll} />
      <AboutMe />
      <Skill />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
