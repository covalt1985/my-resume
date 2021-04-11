import React from 'react';
import { GoPerson } from 'react-icons/go';
import { GiSkills } from 'react-icons/gi';
import { FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

import { AboutMe, Skills, Projects, Contact } from '../Routes/Routes';

export const SidedbarData = [
 {
  title: 'O mnie',
  icon: <GoPerson />,
  link: '/about-me',
  component: AboutMe,
 },
 {
  title: 'Umiejętności',
  icon: <GiSkills />,
  link: '/skils',
  component: Skills,
 },
 {
  title: 'Moje Projekty',
  icon: <FaProjectDiagram />,
  link: '/projects',
  component: Projects,
 },
 {
  title: 'Kontakt',
  icon: <FaPhoneAlt />,
  link: '/contact',
  component: Contact,
 },
];
