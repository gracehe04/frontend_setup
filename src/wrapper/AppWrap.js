import React from 'react';
import { SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        {/* <SocialMedia /> */}
            <div className = "app__wrapper app__flex">
              <Component />
              <div className = "copyright">
                <p classame = "p-text">@2024 GRACE</p>
              </div>
            </div> 
      </div>
    </div>
  );
};

export default AppWrap;
