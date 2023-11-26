import Container from "../components/Container"

import "./Skill.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skill() {
    return (
        <Container>
            <section className="Skill_Container">
                <h2>Habilidades</h2>
                <ul>
                    <li className="html"><FaHtml5 /></li>
                    <li className="css"><FaCss3Alt /></li>
                    <li className="javascript"><IoLogoJavascript /></li>
                    <li className="react"><FaReact /></li>
                    <li className="git"><FaGitAlt /></li>
                    <li className="sass"><FaSass /></li>
                </ul>
            </section>
        </Container>
    )
    
}

export default Skill