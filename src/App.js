import React, { Component } from 'react';
import About from './components/pages/About';
import Header from './components/headerComponents/header.js';
import './Assets/css/default.min.css';
import Footer from './components/footerComponents/footer.js';
import Homepage from './components/pages/HomePage';
import Navigation from './components/pages/navigation.js';
import Blog2 from './components/pages/Blog2.js'

import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
<div className="grid-container">

<Route exact path='/' component={Homepage}/>
<Route exact path='/Blog2' component={Blog2}/>
<Route exact path='/Homepage' component={Homepage}/>
<Route exact path='/About' component={About}/>

<Navigation/>
</div>
<Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
