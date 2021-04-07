import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from './Components/Sidebar';

function App() {
 return (
  <div className="App">
   <Sidebar />
  </div>
 );
}

export default App;
