import Redes from "./Redes";

import style from "./Container_Footer.module.css"

function Container_Footer() {
    return (
        <footer className={style.container_footer}>
            <p>
                Portfolio do Desenvolvedor web <strong>Matheus Gomes</strong>.
            </p>
            <Redes />
        </footer>
    )
}

export default Container_Footer