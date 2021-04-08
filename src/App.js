import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { SidedbarData } from './Components/Sidebar/SidedbarData';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPhoto from './Components/MainPhoto/index';

export default class App extends Component {
 constructor(props) {
  super(props);
  this.state = { activeTab: '' };
  this.changeActiveTab = this.changeActiveTab.bind(this);
 }

 changeActiveTab(clickedTab) {
  this.setState({ activeTab: clickedTab });
 }

 render() {
  return (
   <div className="App">
    <Sidebar
     activeTab={this.state.activeTab}
     changeActiveTab={this.changeActiveTab}
    />
    <MainPhoto />
    <Switch>
     {SidedbarData.map(el => {
      return <Route exact path={el.link} component={el.component} />;
     })}
    </Switch>
   </div>
  );
 }
}
