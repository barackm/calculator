import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container px-4 px-lg-5">
      <Link className="navbar-brand" to="/">Mathmaticians</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto my-2 my-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/calculator">Calculator</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/quotes">Quotes</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
