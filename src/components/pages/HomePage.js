import React, { Component } from 'react';


class Homepage extends Component {
  render() {
    return (
      <div className="div1">
      <p className="ab">Welcome to my blog</p>

      <img src={require('./images/a.png')}  alt =" " width='570' height='370'/>

      </div>
    );
  }
}

export default Homepage;
