import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Projects } from "./components/project/projects";
import { HardSkills } from "./components/skill/hard-skills";
import { TalkToMe } from "./components/talk-to-me/talk-me";

export function App() {

  return (
    <div className="h-full text-gray-900 dark:text-white font-ChakraPetch bg-gradient-to-b from-[#808080] to-white dark:from-[#000015] dark:to-[#000] bg-fixed">
      <Header />
      <Home />
      <HardSkills />
      <Projects />
      <TalkToMe />
    </div>
  );
}