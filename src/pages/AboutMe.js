import style from './Aboutme.module.css'
import Container from "../components/Container"


function AboutMe() {
    return (
        <Container classCustom="Container_Aboutme">
            <section className={style.AboutMe_Container}>
                <h2>Desenvolvedor <span>Web</span></h2>
                <h1>Sobre mim</h1>
                <p>
                    Ola, me chamo Matheus Gomes, tenho 19 anos e sou <strong>Desenvolvedor web junior</strong>, sou um dev curioso sempre buscando me aprimorar meus conhecimentos, gosto de desenhar assistir series, filmes, animes e games. tenho varios projetos criados utilizando: <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>JQuery</strong> e <strong>Sass</strong>, tendo o <strong>sass</strong> e <strong>JQuery</strong> como ferramanta mais atual aderida, utilizo o <strong>git</strong> como sistema de controle de versão.
                </p>
            </section>
        </Container>
    )

}

export default AboutMe