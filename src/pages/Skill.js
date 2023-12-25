import Container from "../components/Container"

import "./Skill.css"
import "./Icons.css"

import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Skill() {
    return (
        <Container>
            <section className="Skill_Container">
                <h2>Habilidades</h2>
                <ul>
                    <li className="html">
                        <abbr title="HTML5">
                            <FaHtml5 />
                        </abbr>
                    </li>
                    <li className="css">
                        <abbr title="CSS">
                            <FaCss3Alt />
                        </abbr>
                    </li>
                    <li className="javascript">
                        <abbr title="JavaScript">
                            <IoLogoJavascript />
                        </abbr>
                    </li>
                    <li className="react">
                        <abbr title="React.js">
                            <FaReact />
                        </abbr>
                    </li>
                    <li className="git">
                        <abbr title="Git">
                            <FaGitAlt />
                        </abbr>
                    </li>
                    <li className="jquery">
                        <abbr title="JQuery">
                            <SiJquery />
                        </abbr>
                    </li>
                    <li className="sass">
                        <abbr title="Sass">
                            <FaSass />
                        </abbr>
                    </li>
                </ul>
            </section>
        </Container>
    )
    
}

export default Skill