import React from 'react';
import { GoPerson } from 'react-icons/go';
import { GiSkills } from 'react-icons/gi';
import { FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa';

export const SidedbarData = [
 {
  title: 'O mnie',
  icon: <GoPerson />,
  link: '/about-me',
 },
 {
  title: 'Umiejętności',
  icon: <GiSkills />,
  link: '/skils',
 },
 {
  title: 'Moje Projekty',
  icon: <FaProjectDiagram />,
  link: '/projects',
 },
 {
  title: 'Kontakt',
  icon: <FaPhoneAlt />,
  link: '/contact',
 },
];
