import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Projects } from "./components/project/projects";
import { HardSkills } from "./components/skill/hard-skills";
import { TalkToMe } from "./components/talk-to-me/talk-me";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export function App() {
  function clickBackTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div
      className="h-full text-gray-900 dark:text-white font-ChakraPetch bg-gradient-to-b from-[#808080] to-white dark:from-[#000015] dark:to-[#000] bg-fixed"
    >
      <Header />
      <Home />
      <HardSkills />
      <Projects />
      <TalkToMe />
      <button 
        type="button"
        id="backTop"
        className="fixed top-20 right-10"
        onClick={()=>clickBackTop()}
      >
        <MdOutlineKeyboardDoubleArrowUp className="size-10 text-white animate-pulse hover:animate-none"/>
      </button>
    </div>
  );
}