import React, { Component } from 'react';
import About from './AboutMe/AboutMe';
import Con from './Contact/Contact';
import Proj from './Projects/Projects';
import Skill from './Skills/Skills';

export const AboutMe = class AboutMe extends Component {
 render() {
  return <About />;
 }
};

export const Skills = class Skills extends Component {
 render() {
  return <Skill />;
 }
};

export const Projects = class Projects extends Component {
 render() {
  return <Proj />;
 }
};

export const Contact = class Contact extends Component {
 render() {
  return <Con />;
 }
};
