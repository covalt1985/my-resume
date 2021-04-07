import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { SidedbarData } from './SidedbarData';
import '../App.css';

export default function Sidebar() {
 return (
  <Nav variant="pills" className="sidebar flex-column">
   {SidedbarData.map((navItem, i) => {
    return (
     <Nav.Link
      as={NavLink}
      to={navItem.link}
      eventKey={navItem.link}
      className="sidebarNavlink">
      {navItem.icon} {navItem.title}
     </Nav.Link>
    );
   })}
  </Nav>
 );
}
