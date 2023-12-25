import Navbar from './components/layout/Navbar';
import AboutMe from './pages/AboutMe';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Footer from './components/layout/Container_Footer';

import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      <Navbar />
      <AboutMe />
      <Skill />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
