import { Fragment } from "react"

import style from './Aboutme.module.css'
import Container from "../components/Container"


function AboutMe() {
    return (
        <Container classCustom="Container_Aboutme">
            <section className={style.AboutMe_Container}>
                <h1>Sobre mim</h1>
                <p>hello, my name is matheus gomes de melo nice to meet you, a'm like tecnology, anime, series, filmes, and games.hello, my name is matheus gomes de melo nice to meet you, a'm like tecnology, anime, series, filmes, and games.hello, my name is matheus gomes de melo nice to meet you, a'm like tecnology, anime, series, filmes, and games.</p>
                <h2>Desenvolvedor <span>Web</span></h2>
            </section>
        </Container>
    )

}

export default AboutMe