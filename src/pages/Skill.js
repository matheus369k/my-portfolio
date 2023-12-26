import Container from "../components/Container"

import "./Skill.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Skill() {

    const [softskills, setSoftskills] = useState([])

    const url = 'https://matheus369k.github.io/Data/portfolio.json'

    const SkillList = {
        "html": <FaHtml5 />,
        "css": <FaCss3Alt />,
        "javascript": <IoLogoJavascript />,
        "react": <FaReact />,
        "jquery": <SiJquery />,
        "sass": <FaSass />,
        "git": <FaGitAlt />
    }

    useEffect(() => {

        if (softskills.length === 0) {
            axios(url)
                .then((resp) => {

                    setSoftskills(resp.data['softskill'])

                }).catch((err) => console.log(err))
        }
    })

    const renderskills = () => {

        let listskill = []

        listskill.push(
            softskills.map((softskill) => (

                <li key={"SoftSkill:"+softskill.id} className="softskills">
                    <i className={`softskills_icons ${Object.keys(SkillList)[parseInt(softskill.id)-1]}`}>
                        {Object.values(SkillList)[parseInt(softskill.id)-1]}
                    </i>
                    <p className="softskills_description">{softskill.description}</p>
                </li>


            ))
        )

        return listskill
    }

    return (
        <Container>
            <section className="Skill_Container">
                <h2>Habilidades</h2>
                <ul>{renderskills()}</ul>
            </section>
        </Container>
    )

}

export default Skill