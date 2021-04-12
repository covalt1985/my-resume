import React, { Component } from 'react';
import { Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//data for sidebar is imported from SidebarData
import { SidedbarData } from './SidedbarData';
import '../../App.css';

export default class Sidebar extends Component {
 constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
 }

 handleClick(e) {
  this.props.changeActiveTab(e.target.dataset.rbEventKey);
 }
 handleKeyPress(e) {
  console.log(e);
 }
 render() {
  return (
   <Nav
    variant="pills"
    defaultActiveKey={this.props.activeTab}
    className="sidebar flex-column">
    <Image src="/photo.jpg" className="photo" />
    {SidedbarData.map((navItem, i) => {
     return (
      <Nav.Link
       onKeyPress={this.handleKeyPress}
       key={i}
       onClick={this.handleClick}
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
}
