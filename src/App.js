import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Frameworks from './components/Frameworks';
import Work from './components/Work';
import Blog from './components/Blog';
// import Project from './components/Project';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import EducareHealth from './components/projects/EducareHealth';
import Root from './components/projects/Root';
import Ignite from './components/projects/Ignite';
import CartaV2 from './components/projects/CartaV2';
import TownHall from './components/projects/TownHall';  
import AutomatedZone from './components/projects/AutomatedZone';
import Discord from './components/projects/Discord';
import AltEdit from './components/projects/AltEdit';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes>
            <Route 
              exact 
              path="/" 
              element={
                <>
                  <section id="intro">
                    <Intro />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="work">
                    <Work />
                  </section>
                  <section id="frameworks">
                    <Frameworks />
                  </section>
                  <section id="blog">
                    <Blog />
                  </section>
                  <Footer />
                </>
              } 
            />
            {/* <Route path="/project/:id" element={<Project />} /> */}
            <Route path="/projects/educare-health" element={<EducareHealth />} />
            <Route path="/projects/root" element={<Root />} />
            <Route path="/projects/ignite" element={<Ignite />} />
            <Route path="/projects/cartav2" element={<CartaV2 />} />
            <Route path="/projects/townhall" element={<TownHall />} />
            <Route path="/projects/automated-zone" element={<AutomatedZone />} />
            <Route path="/projects/discord" element={<Discord />} />
            <Route path="/projects/altedit" element={<AltEdit />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
