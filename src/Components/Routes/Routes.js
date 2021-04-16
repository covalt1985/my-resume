import About from './AboutMe/AboutMe';
import Con from './Contact/Contact';
import Proj from './Projects/Projects';
import Skill from './Skills/Skills';

export const loadClass = () => {
  return 'cardTitleLoaded';
};

export const AboutMe = () => <About />;

export const Skills = () => <Skill />;

export const Projects = () => <Proj />;

export const Contact = () => <Con />;
