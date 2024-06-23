import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Work from './components/Work';
import Blog from './components/Blog';
import Project from './components/Project';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import EducareHealth from './components/projects/EducareHealth';
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
                  <section id="blog">
                    <Blog />
                  </section>
                  <Footer />
                </>
              } 
            />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/projects/educare-health" element={<EducareHealth />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
