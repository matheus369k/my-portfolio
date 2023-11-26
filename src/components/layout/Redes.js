import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Redes.css"
import "../../pages/Icons.css"

function Redes() {
    return (
        <ul className="Redes_container">
            <li className="githube">
                <a href="https://github.com/matheus369k" target="_blank">
                    <FaGithub />
                </a>
            </li>
            <li className="linkedin">
                <a href="https://www.linkedin.com/in/matheus-melo-6824a7274" target="_blank">
                    <FaLinkedin />
                </a>
            </li>
        </ul>
    )
}

export default Redes