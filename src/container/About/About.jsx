import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

const About = () => {
  return (
    <div className="app__about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="head-text"
      >
        <h2 className='head-text'>
          About <span>Me</span>
        </h2>
      </motion.div>
      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <img 
            src={images.gracehabout} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="app__profile-text">
            <p className="p-text paragraph">
              Hi! My name is Grace, a rising junior at New York University studying Applied Psychology at Steinhardt and Computer Science at CAS.
              <br /><br />
              I enjoy creating functional web applications and I am passionate about continuously improving my skills and portfolio. I am currently exploring back-end development and machine learning as an intern at SmartMate 😊
              <br /><br />
              I'm open to any Summer and Fall 2024 internship opportunities. Feel free to 
              <Link to="/contact"> <strong>reach out</strong></Link>!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
