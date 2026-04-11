import React from 'react'
import "./App.css"

// const Navbar = () => {
//   return (
//     <div classname="nav">Navbar
//     </div>
//   )
// }
// export default Navbar

import React from 'react';
import '../styles/style.css';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: '#fff' }}>
      <div className="logo"><strong>Brand</strong></div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
