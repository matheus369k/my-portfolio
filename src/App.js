import './App.css';

import { Fragment } from 'react';
import AboutMe from './pages/AboutMe';
import Skill from './pages/Skill';
import Projects from './pages/Projects';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Fragment>
      {/*<HashRouter>
        <nav>
          <li><Link to='/'>Sobre min</Link></li>
          <li><Link to='/skills'>Habilidades</Link></li>
          <li><Link to='/projects'>Projetos</Link></li>
        </nav>
        <Routes>
          <Route path='/' element={<AboutMy />} />
          <Route path='/skills' element={<Skill />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </HashRouter>*/}
      <Navbar />
      <AboutMe />
      <Skill />
      <Projects />
    </Fragment>
  );
}

export default App;
