import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { SidedbarData } from './Components/Sidebar/SidedbarData';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPhoto from './Components/MainPhoto/index';

export default class App extends Component {
 constructor(props) {
  super(props);
  this.state = { activeTab: '', isItLoading: false };
  this.changeActiveTab = this.changeActiveTab.bind(this);
 }

 //which sidebar's tab is active
 changeActiveTab(clickedTab) {
  this.setState({ activeTab: clickedTab });
 }

 render() {
  return (
   <div className="App container" ref={this.wrapper}>
    <Row className="wrap">
     <Sidebar
      activeTab={this.state.activeTab}
      changeActiveTab={this.changeActiveTab}
     />
     <MainPhoto />
     <div style={{ display: 'flex' }}>
      <Switch>
       {SidedbarData.map(el => {
        return (
         <Route key={el.title} exact path={el.link} component={el.component} />
        );
       })}
       <Route path="/">
        <Redirect to="/about-me" />
       </Route>
      </Switch>
     </div>
    </Row>
   </div>
  );
 }
}
