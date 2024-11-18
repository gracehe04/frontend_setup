import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About, Footer, Header, Skills, Projects, Contact } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        {/*<Route path="/skills" element={<Skills />} /> */}
                        <Route path="/contact" element={<Contact />} /> 
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
