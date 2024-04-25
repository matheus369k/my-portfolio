import persona from "../../assets/persona.png";
import { Button } from "../components/button";
import { Link } from "../components/link";
import { Span } from "./components/span";

export function Home() {
    return (
        <section id="home" className="flex justify-between items-center h-screen max-w-[1149px] mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className="flex flex-col gap-4">
                    <Span>Desenvolvedor</Span>
                    <Span>Web</Span>
                </h2>
                <ul className="m-auto flex gap-8">
                    <Link href="https://github.com/matheus369k">
                        <Button>GitHub</Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/matheus-melo-6824a7274">
                        <Button>Linkedin</Button>
                    </Link>
                    <Link href="https://docs.google.com/document/u/0/d/1jez9krcwrwrSTi5yFkSL3ORCFiSD1azpXQsSlaMhfPI/edit?usp=sharing&pli=1">
                        <Button>Curriculo</Button>
                    </Link>
                </ul>
            </div>
            <img
                src={persona}
                alt="personagem"
                className="w-1/3 max-h-[400px] max-w-[400px]"
            />
        </section>
    )

}
