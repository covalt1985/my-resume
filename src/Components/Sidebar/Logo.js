import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './TK.svg';

const Logo = () => (
 <ReactVivus
  id="logo"
  option={{
   duration: 80,
   file: svg,
   type: 'sync',
  }}
  style={{ height: '100px', width: '100px' }}
 />
);
export default Logo;
