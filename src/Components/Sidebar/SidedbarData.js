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
    ref: 'title',
  },
  {
    title: 'Umiejętności',
    icon: <GiSkills />,
    link: '/skils',
    component: Skills,
    ref: 'skills',
  },
  {
    title: 'Moje Projekty',
    icon: <FaProjectDiagram />,
    link: '/projects',
    component: Projects,
    ref: 'projects',
  },
  {
    title: 'Kontakt',
    icon: <FaPhoneAlt />,
    link: '/contact',
    component: Contact,
    ref: 'contact',
  },
];
