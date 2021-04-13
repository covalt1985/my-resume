import React from 'react';
import html from './icons/html.svg';
import css from './icons/css.svg';
import es6 from './icons/es6.svg';
import react from './icons/react.svg';
import reactApp from './icons/reactapp.svg';
import git from './icons/git.svg';
import reactRouter from './icons/reactrouter.svg';
import reactBootstrap from './icons/reactbootstrap.svg';

export const knowledge = {
 aquired: [
  { icon: <img src={html} />, text: 'HTML 5' },
  { icon: <img src={css} />, text: 'CSS 3' },
  { icon: <img src={es6} />, text: 'ES 6' },
  { icon: <img src={react} className="reactSvg" />, text: 'React JS' },
  { icon: <img src={reactApp} />, text: 'React-Create-App' },
  { icon: <img src={git} />, text: 'Git & Github' },
  { icon: <img src={reactRouter} />, text: 'React Router' },
  { icon: <img src={reactBootstrap} />, text: 'React Bootstrap' },
 ],
 inProgres: { reactHooks: {}, contextApi: {}, nextJs: {}, webpack: {} },
 willLearn: {
  redux: {},
  avanceGit: {},
  advanceBootstrap: {},
  gatsby: {},
  nodejs: {},
 },
};
