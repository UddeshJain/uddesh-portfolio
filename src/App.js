import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
  
class App extends Component {
  render() {
    return (
      <div className='App'>
          <Route exact path='/' component={MainPage} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default App;
