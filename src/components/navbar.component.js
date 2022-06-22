import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">練習紀錄</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">建立新的練習紀錄</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">建立使用者</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}