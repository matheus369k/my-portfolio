import Container from "../components/Container"

import style from "./Projects.module.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import projectPokedex from '../images/Project-pokedex.PNG'
import projectspace from '../images/Project-space.PNG'
import projectsagaTransformers from '../images/Project-sagaTransformers.PNG'
import projectecommerc from '../images/Project-ecommerc.PNG'
import projecthomePage from '../images/Project-homePage.PNG'
import projectelogin from '../images/Project-login.PNG'

function Projects() {
    return (
        <Container>
            <section className={style.Projects_container}>
                <h2>Projetos</h2>
                <ul className={style.Projects_container_leftPosition}>
                    <li>
                        <h3> Pokedex </h3>
                        <p>
                            O Projeto e um site com o foco de mostrar informações de cada pokemon da serie, com o mesmo nome,
                            tendo seu desenvolvimeto em react, seus dados foram importados de uma <strong>API</strong> json, criada e armazenada no meu repositoria. as bibliotecas utilizadas com maior presença foram: <strong>Axios</strong> para API,<strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O projeto teve como maior pratica criação de funções 
                        </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <img src={projectPokedex} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Space Tourism</h3>
                        <p>
                            Space Tourism e um site Desenvolvido com o foco de simular um possivel guia para orientar turistas espaciais, tendo seu desenvolvimeto em react, seus dados foram importados de uma <strong>API</strong> json. Na criação do projeto fora utilizadas como principais bibliotecas: <strong>Axios</strong> para API,<strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O projeto teve como maior pratica criação de estilização.
                        </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <img src={projectspace} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Saga Transformers</h3>
                        <p>
                            O projeto  Saga Transformers e um site informativo sobre todos os filmes da franquia no momento, fora utilizado <strong>arrays</strong> para gardar as informações do site. Ao desenvolver o projeto fora utilizadas como principais bibliotecas: <strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O projeto teve como maior pratica criação de estilização.
                            </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <img src={projectsagaTransformers} alt="Projeto" />
                    </li>
                </ul>
                <ul className={style.Projects_container_rigthPosition}>
                    <li>
                        <h3> Product Ecommerce </h3>
                        <p>
                            
                        </p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="css"><FaCss3Alt /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <img src={projectecommerc} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Home Page </h3>
                        <p>hello is this my projeto, it's is berifull and vary fast.</p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="css"><FaCss3Alt /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <img src={projecthomePage} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Login Page</h3>
                        <p>hello is this my projeto, it's is berifull and vary fast.</p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="sass"><FaSass /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <img src={projectelogin} alt="Projeto" />
                    </li>

                </ul>
            </section>
        </Container>
    )

}

export default Projects