import "./footer.css";
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <nav className="texfoot">
        <a href="#"className="home">Home</a>
        <a href="#" className="about">About</a>
        <a href="https://www.linkedin.com/in/ratnadeep-baruah-4b14a9207/" className="contact">Contact us</a>
      </nav>
      <p className="cpy">Copyright 2021</p>
    </footer>
  );
}

export default Footer;
