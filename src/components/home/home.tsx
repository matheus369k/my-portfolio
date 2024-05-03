import persona from "../../assets/persona.png";
import { Button } from "../components/button";
import { Link } from "../components/link";
import { Span } from "./components/span";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiFileDocBold } from "react-icons/pi";

export function Home() {
    return (
        <section
            id="home"
            className="flex max-lg:flex-col-reverse max-lg:gap-20 justify-between max-lg:justify-start items-center p-5 max-sm:px-2 my-16 max-md:my-10 min-h-screen max-w-[1149px] mx-auto"
        >
            <div
                className="w-full flex flex-col gap-10"
            >
                <h2
                    className="flex flex-col gap-4"
                >
                    <Span>Desenvolvedor</Span>
                    <Span id="title-auto-toggle"></Span>
                </h2>
                <ul
                    className="m-auto flex justify-center flex-wrap gap-8 max-sm:gap-4"
                >
                    <li>
                        <Link href="https://github.com/matheus369k">
                            <Button type="button" title="Acessar o GitHub">
                                <FaGithub className="size-4 mr-1" />
                                GitHub
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/matheus-melo-6824a7274">
                            <Button type="button" title="Acessar o Linkedin">
                                <FaLinkedin className="size-4 mr-1" />
                                Linkedin
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://docs.google.com/document/u/0/d/1jez9krcwrwrSTi5yFkSL3ORCFiSD1azpXQsSlaMhfPI/edit?usp=sharing&pli=1">
                            <Button type="button" title="Acessar o Curriculo">
                                <PiFileDocBold className="size-4 mr-1" />
                                Curriculo
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <img
                src={persona}
                alt="personagem"
                className="w-1/3 max-lg:w-full max-h-[400px] max-w-[400px] max-lg:mt-10"
            />
        </section>
    )

}
