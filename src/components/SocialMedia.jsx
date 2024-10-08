import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/gracehe04/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://github.com/gracehe04" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
    </div>
  );
}

export default SocialMedia;
