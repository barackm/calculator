import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header className="masthead">
    <div className="container px-4 px-lg-5 h-100">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-8 align-self-end">
          <h1 className="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
          <hr className="divider" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
          <Link className="btn-home" to="/calculator">Find Out More</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Home;
