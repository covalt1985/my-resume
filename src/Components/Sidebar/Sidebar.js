import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//sidebar tabs data goes from here
import Logo from './Logo';
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

  render() {
    return (
      <Nav
        variant="pills"
        defaultActiveKey={this.props.activeTab}
        className="sidebar flex-column">
        <div className="photo">{Logo()}</div>
        {SidedbarData.map((navItem, i) => {
          return (
            <Nav.Link
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
