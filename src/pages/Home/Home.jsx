import React from 'react';
import Hero from '../hero/Hero';
import Navbar from '../../components/Navbar';
import About from '../about/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
         <Hero></Hero>
         <About></About>  
         <Projects></Projects>
         <Skills></Skills> 
        </div>
    );
};

export default Home;