import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {


  render() {
    return (
      <nav className="navbar navbar-expand">
        
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item text-light">
          <Link to="/" className="nav-link">Home</Link> 
          </li>
          <li className="navbar-item text-light">
          <Link to="/factOne" className="nav-link">Fun Fact One</Link> 
          </li>
          <li className="navbar-item text-light">
          <Link to="/factTwo" className="nav-link">Fun Fact Two</Link> 
          </li>
          <li className="navbar-item text-light">
          <Link to="/factThree" className="nav-link">Fun Fact Three</Link>  
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}