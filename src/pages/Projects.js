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

    const SkillList = {
        "HTML5": <FaHtml5 />,
        "CSS": <FaCss3Alt />,
        "JavaScript": <IoLogoJavascript />,
        "React.js": <FaReact />,
        "JQuery": <SiJquery />,
        "Sass": <FaSass />
    }

    const ListStyleIcons = [
        "html",
        "css",
        "javascript",
        "react",
        "jquery",
        "sass"
    ]

    useEffect(() => {

        if (projects.length === 0) {
            axios(url)
                .then((resp) => {

                    setProjects(resp.data['projects'])

                }).catch((err) => console.log(err))
        }
    })


    const rendersoftskill = (skils, id) => {

        let listProjects = []

        for (let indexArray = 0; indexArray < Object.values(skils).length; indexArray++) {

            for (let IndexObject = 0; IndexObject < Object.keys(SkillList).length; IndexObject++) {

                if (skils['skill-' + (parseInt(indexArray) + 1)] === Object.keys(SkillList)[IndexObject]) {

                    listProjects.push(

                        <li key={"skill"+id+":"+indexArray} className={`${ListStyleIcons[IndexObject]}`}>
                            { Object.values(SkillList)[IndexObject] }
                        </li>
                    )
                }
            }
        }

        return listProjects
    }

    console.log('render project')

    const renderProjects = () => {
        return (
            <ul className={style.project_list}>
                {
                    projects.map((project) => (
                        <li key={project.id} className={style.project}>

                            <h3 className={style.project_name}>{project.name}</h3>

                            <picture className={`${style[project.img]} ${style.project_image}`}></picture>

                            <p className={style.project_description}>{project.description}</p>

                            <div className={style.project_Container_Skill_links}>

                                <nav key={"Links:"+project.id} className={style.project_links}>

                                    <ul>

                                        <li key={"repositorio:"+project.id}  className="repositorio">

                                            <a href={project.links.repositorio} target="_blank"> <CgRemote /> </a>

                                        </li>

                                        <li key={"deploy:"+project.id}  className="site">

                                            <a href={project.links.deploy} target="_blank"> <CgMediaLive /> </a>

                                        </li>

                                    </ul>

                                </nav>

                                <ul key={"ShoftSklls:"+project.id} className={style.project_softSkills}>

                                    {rendersoftskill(project.skils, project.id)}

                                </ul>

                            </div>
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