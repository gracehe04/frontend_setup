import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const [dynamicText, setDynamicText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [dynamicIndex, setDynamicIndex] = useState(0);
  const dynamicTexts = [
    "It's great to see you here 😊",
    "I'm a full-stack developer 💻",
    "I'm interested in Psychology (Behavioral, Developmental)🧠",
    "I love trying new restaurants and matcha places🍵",
    "stay tuned for more updates 🌀"
  ];
  const typingSpeed = 85;

  useEffect(() => {
    let timer;
    if (textIndex < dynamicTexts[dynamicIndex].length) {
      timer = setTimeout(() => {
        setDynamicText(prev => prev + dynamicTexts[dynamicIndex].charAt(textIndex));
        setTextIndex(textIndex + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDynamicText('');
        setTextIndex(0);
        setDynamicIndex((dynamicIndex + 1) % dynamicTexts.length);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [textIndex, dynamicTexts, dynamicIndex]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="hello">👋</span>
            <div style={{ marginLeft: 20 }}>
              <h4 className="h3-text">Hello! I am</h4>
                <span className="head-text">Grace</span>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div className="dynamic-text">{dynamicText}</div>
            <span className="blink-cursor">|</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className = "graceh">
          <img src={images.graceh} alt="graceh"/>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
