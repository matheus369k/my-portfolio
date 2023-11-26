import Container from "../components/Container"

import style from "./Projects.module.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { CgRemote } from "react-icons/cg";

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
                            O Projeto e um site com o foco exibir informações de cada pokemon, tendo seu desenvolvimeto em react, seus dados foram importados de uma <strong>API</strong> json, criada e armazenada no meu repositoria. as bibliotecas utilizadas com maior presença foram: <strong>Axios</strong> para API,<strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O porjeto e totalmente responsivo utilizando os <strong>mediaQuerys</strong> no <strong>CSS</strong>. O projeto teve como maior pratica criação de funções 
                        </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/pokedex" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/pokedex/#" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projectPokedex} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Space Tourism</h3>
                        <p>
                            Space Tourism e um site Desenvolvido com o objetive de apresentar um guia para orientar turistas espaciais, tendo seu desenvolvimeto em <strong>react</strong>, seus dados foram importados de uma <strong>API</strong> <strong>json</strong>. Na criação do projeto fora utilizadas como principais bibliotecas: <strong>Axios</strong> para API,<strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O porjeto e totalmente responsivo utilizado os <strong>mediaQuerys</strong> no <strong>CSS</strong>. O projeto teve como maior pratica criação de estilização.
                        </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/space-tourism-website" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/space-tourism-website/#" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projectspace} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Saga Transformers</h3>
                        <p>
                            O projeto  Saga Transformers e um site informativo sobre todos os filmes da franquia no momento, fora utilizado <strong>arrays</strong> para gardar as informações dos filmes. Ao desenvolver o site teve como principais bibliotecas: <strong> react-icons</strong> para adicionar icons e <strong>react-router-dom</strong> para navagar entre abas. O porjeto e totalmente responsivo utilizado os <strong>mediaQuerys</strong> no <strong>CSS</strong>. O projeto teve como maior pratica criação de estilização.
                            </p>
                        <ul>
                            <li className="react"><FaReact /></li>
                            <li className="css"><FaCss3Alt /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/saga-transformers-site" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/saga-transformers-site/" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projectsagaTransformers} alt="Projeto" />
                    </li>
                </ul>
                <ul className={style.Projects_container_rigthPosition}>
                    <li>
                        <h3> Product Ecommerce </h3>
                        <p>
                            Product ecommerc e uma pagina de venda de um produto, fora criado algumas funções, sendo elas de compra de um item, adiciona-la ao carrinho, remove-lo do carrinho, ao clicar na imagem ele se sobre sai em relação a pagina e outras. O porjeto e totalmente responsivo utilizado os <strong>mediaQuerys</strong> no <strong>CSS</strong>. O desenvolvimeto do projeto teve sua maior partica a logica de programação.
                        </p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="css"><FaCss3Alt /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/ecommerce-product-page-main" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/ecommerce-product-page-main/" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projectecommerc} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Home Page </h3>
                        <p>
                            Home page e uma pagina que simula o desenvolvimeto da pagina principal de um site, tendo sua criação direcionado a pratica e organização do conteudo, fora usado <strong>grid layout</strong> e <strong>flexbox</strong>, sendo eles responsaveis pela adaptação do conteudo. A pagina e totalmente responsivo utilizado os <strong>mediaQuerys</strong> no <strong>CSS</strong>. O projeto teve como maior pratica criação de estilização.
                        </p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="css"><FaCss3Alt /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/news-homepage-main" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/news-homepage-main/" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projecthomePage} alt="Projeto" />
                    </li>
                    <li>
                        <h3> Login Page</h3>
                        <p>
                            Login page e um projeto que tem o foco o Aprimoramento das habilides em <strong>Sass</strong> utilizando <strong>variables</strong>, <strong>mixins</strong> e <strong>funções</strong> no <strong>sass</strong>, fora utilizado tanto <strong>grid layout</strong> quanto <strong>flexbox</strong> para organizar os items, tendo sua adaptação com <strong>mediaQuerys</strong>, e utilizado o <strong>javascript</strong> para criação da mensagem de confirmação de login e uma pequena verificação.
                        </p>
                        <ul>
                            <li className="html"><FaHtml5 /></li>
                            <li className="sass"><FaSass /></li>
                            <li className="javascript"><IoLogoJavascript /></li>
                        </ul>
                        <nav>
                            <li className="repositorio">
                                <a href="https://github.com/matheus369k/PROJETOLOGIN" target="_blank">
                                    <CgRemote />
                                </a>
                            </li>
                            <li className="site">
                                <a href="https://matheus369k.github.io/PROJETOLOGIN/" target="_blank">
                                    <CgMediaLive />
                                </a>
                            </li>
                        </nav>
                        <img src={projectelogin} alt="Projeto" />
                    </li>

                </ul>
            </section>
        </Container>
    )

}

export default Projects