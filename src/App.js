import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/Home/Home'

// Pages Component

class App extends Component {
  render(){
  return (
        <Router>
          <Route exact to="/" component={Home} />
        </Router>
    )
  }
}

export default App;
