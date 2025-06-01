import React from 'react';
import Navbar from './components/Navbar';
import Hightlight from './components/Hightlight';
import Hero from './components/Hero';
import Model from './components/Model';
import Feature from './components/Feature';
import HowItWork from './components/HowItWork';
import Footer from './components/Footer';

const App = () => {
    return (
        <main className="bg-black ">
            <Navbar />
            <Hero />
            <Hightlight />
            <Model />
            <Feature />
            <HowItWork />
            <Footer />
        </main>
    );
};

export default App;
