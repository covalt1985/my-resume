import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { SidedbarData } from './Components/Sidebar/SidedbarData';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPhoto from './Components/MainPhoto/index';

const AnimatedSwitch = withRouter(({ location }) => (
 <TransitionGroup style={{ display: 'flex' }}>
  <CSSTransition
   key={location.key}
   classNames="slide"
   timeout={1000}
   unmountOnExit>
   <Switch location={location}>
    {SidedbarData.map(el => {
     return (
      <Route key={el.title} exact path={el.link} component={el.component} />
     );
    })}
    <Route exact path="/">
     <Redirect to="/about-me" />
    </Route>
   </Switch>
  </CSSTransition>
 </TransitionGroup>
));

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
    <AnimatedSwitch />
   </div>
  );
 }
}
