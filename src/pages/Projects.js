import Container from "../components/Container"

import style from "./Projects.module.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { CgMediaLive } from "react-icons/cg";
import { CgRemote } from "react-icons/cg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Projects() {

    const [projects, setProjects] = useState([])

    const url = 'https://matheus369k.github.io/Data/portfolio.json'

    useEffect(() => {

        if (projects.length===0) {
            axios(url)
                .then((resp) => {

                    setProjects(resp.data['projects'])

                }).catch((err) => console.log(err))
        }
    })

    console.log('render')

    const renderProjects = () => {
        return (
            <ul>
                {
                    projects.map((project) => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <img src={project.src} alt={`Project: ${project.name}`} />
                            <p>{project.description}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (
        <Container>
            <section className={style.Projects_container}>
                <h2>Projetos</h2>
                {renderProjects()}
            </section>
        </Container>
    )

}

export default Projects