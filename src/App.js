import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from './Components/Sidebar/Sidebar';
import { SidebarData } from './Components/Sidebar/SidedbarData';

function App() {
 return (
  <div className="App">
   <Sidebar />
   <Switch></Switch>
  </div>
 );
}

export default App;
