import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Redes.css"
import "../../pages/Icons.css"

function Redes() {
    return (
        <ul className="Redes_container">
            <li className="githube"><FaGithub /></li>
            <li className="linkedin"><FaLinkedin /></li>
        </ul>
    )
}

export default Redes