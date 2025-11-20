import React from 'react';
import '../style/TopNav.css';   // <-- import external CSS

export default function TopNav() {
  return (
    <nav id="navbar">
      <h2 id="udemy-title">UDEMY</h2>

      <p id="explore">Explore</p>

      <input
        type="search"
        placeholder="search for everything"
        id="search-bar"
      />

      <p>Teach on Udemy</p>
      <p>Cart</p>

      <button className="login-btn">Log in</button>
      <button className="signup-btn">Sign up</button>
    </nav>
  );
}
