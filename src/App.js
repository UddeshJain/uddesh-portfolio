import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';
import MainPage from './Components/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route>
          <div className="App">
            <MainPage exact path='/' Component={MainPage}/>
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
