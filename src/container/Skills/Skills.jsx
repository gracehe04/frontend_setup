import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { PortableText } from '@portabletext/react';
import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        console.log('Fetched data:', data);
        setExperience(data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        console.log('Fetched data:', data);
        setSkills(data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return (
    <>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="head-text"
      >
        <h2 className='head-text'>
          My <span>Experience</span>
        </h2>
      </motion.div>

      <div className="resume">
        <a href={`${process.env.PUBLIC_URL}/Grace He Resume.pdf`} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.length > 0 && experience.map((exp) => (
            <div key={exp.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works && exp.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <h5 className="h5-text">
                      <PortableText value={work.company} />
                    </h5>
                    <p className="p-text">{work.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default (Skills);
