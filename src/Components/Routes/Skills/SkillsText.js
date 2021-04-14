import React from 'react';
import html from './icons/html.svg';
import css from './icons/css.svg';
import es6 from './icons/es6.svg';
import react from './icons/react.svg';
import reactApp from './icons/reactapp.svg';
import git from './icons/git.svg';
import reactRouter from './icons/reactrouter.svg';
import reactBootstrap from './icons/reactbootstrap.svg';
import hook from './icons/hook.svg';
import next from './icons/nextjs.svg';
import webpack from './icons/webpack.svg';

export const knowledge = {
 aquired: [
  { icon: <img src={html} alt="html" />, text: 'HTML 5' },
  { icon: <img src={css} alt="css" />, text: 'CSS 3' },
  { icon: <img src={es6} alt="es6" />, text: 'ES 6' },
  {
   icon: <img src={react} className="reactSvg" alt="react" />,
   text: 'React JS',
  },
  {
   icon: <img src={reactApp} alt="react-create-app" />,
   text: 'React-Create-App',
  },
  { icon: <img src={git} alt="git" />, text: 'Git & Github' },
  { icon: <img src={reactRouter} alt="react-router" />, text: 'React Router' },
  {
   icon: <img src={reactBootstrap} alt="rBootstrap" />,
   text: 'React Bootstrap',
  },
 ],
 learning: [
  { icon: <img src={hook} alt="hook" />, text: 'React Hooks' },
  { icon: <img src={react} alt="context" />, text: 'React contextApi' },
  { icon: <img src={next} alt="nextJs" />, text: 'nextJs' },
  { icon: <img src={webpack} alt="webpack" />, text: 'webpack' },
 ],
 willLearn: [
  { redux: {} },
  { avanceGit: {} },
  { advanceBootstrap: {} },
  { gatsby: {} },
  { nodejs: {} },
 ],
};
