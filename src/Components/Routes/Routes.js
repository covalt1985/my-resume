import React, { Component } from 'react';
import About from './AboutMe';
import Con from './Contact';
import Proj from './Projects';
import Skill from './Skills';

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
