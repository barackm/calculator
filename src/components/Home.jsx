import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header className="masthead">
    <div className="container px-4 px-lg-5 h-100">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-8 align-self-end">
          <h1 className="text-white font-weight-bold">Welcome to our page!</h1>
          <hr className="divider" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 mb-5 hero-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
          <Link className="btn-home" to="/calculator">Find Out More</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Home;
