import React, { Component } from 'react';
//import {Link} from 'react-router-dom';


class Navigation extends Component {
  render() {
    return (

      <div className="div2">
      <nav className="nav1">
      <ul>
      <li><a href = "/HomePage" >Home</a></li>
      <li><a href ="/Blog2">Blogs</a></li>
      <li><a href = "/About">About</a></li>

      </ul>
      </nav>

      </div>

    );
  }
}

export default Navigation;
