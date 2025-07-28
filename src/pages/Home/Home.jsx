import React from 'react';
import Hero from '../hero/Hero';
import Navbar from '../../components/Navbar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
         <Hero></Hero>
         <About></About>  
         <Projects></Projects>
         <Skills></Skills> 
         <Contact></Contact>
        </div>
    );
};

export default Home;