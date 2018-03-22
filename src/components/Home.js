import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamLogo from './TeamLogo';
import { getTeamNames } from '../api';


class Home extends Component {
  state = {
    teamNames: []
  }

  componentDidMount(){
    getTeamNames().then(teamNames => this.setState(() => ({ teamNames })));
  }

  render(){
    return (
      <div className="container">
        <h1 className="large-header">Hash History Basketball League</h1>
        <h3 className="header text-center">Select a team</h3>

        <div className="home-grid">
          {this.state.teamNames.map(id => (
            <Link
              key={id}
              to={`/${id}`}
              >
              <TeamLogo id={id} width={125}/>
            </Link>
          ))}
        </div>
      </div>
    );
  } // render
}

export default Home;
