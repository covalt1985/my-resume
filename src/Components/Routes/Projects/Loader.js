import React, { Component } from 'react';

import './loader.css';

class Loader extends Component {
  render() {
    return (
      <span className="projectLoader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </span>
    );
  }
}

export default Loader;
