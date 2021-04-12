import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { SidedbarData } from './Components/Sidebar/SidedbarData';
import Sidebar from './Components/Sidebar/Sidebar';
import MainPhoto from './Components/MainPhoto/index';

const AnimatedSwitch = withRouter(({ location }) => {
 const Ref = React.createRef(null);
 return (
  <TransitionGroup style={{ display: 'flex' }}>
   <CSSTransition
    nodeRef={Ref}
    key={location.key}
    classNames="slide"
    timeout={1000}
    unmountOnExit>
    <div ref={Ref} style={{ display: 'flex' }}>
     {SidedbarData.map(el => {
      return (
       <Route key={el.title} exact path={el.link} component={el.component} />
      );
     })}
     <Route exact path="/">
      <Redirect to="/about-me" />
     </Route>
    </div>
   </CSSTransition>
  </TransitionGroup>
 );
});

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
   <div className="App" ref={this.wrapper}>
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
