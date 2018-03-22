import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/players" component={Players} />
            <Route path="/teams" component={Teams} />
            <Route render={() => (<h1 className="text-center">404 Error</h1>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
