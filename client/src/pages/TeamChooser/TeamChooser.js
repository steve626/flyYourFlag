import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper"
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import { FormBtn }  from '../../components/Form';
import API from "../../utils/API"
import {List, ListItem } from "../../components/List"
//import Teams from ''

//psuedocode of choosing teams:
// 1. see dropdown boxes of different team leagues
// 2. choose league and see list of teams eg:show all teams with matching league in DB
// 3. selected team is saved to user DB 
// 4. must choose at least one team
// 5. finish button to go to map screen




class TeamChooser extends Component {
  state = {
    teams: "",
    league:""
    // ??? should we collect an initial location here? 
    //,location: ""
  };

  //wait until page loads and then be ready to submit the form (this may be useless)
  componentDidMount() {
    this.handleFormSubmit();
  };

  //fxn for collecting user email and password and coordinates? should location 
  //be collected here or on the map screen...?

  handleFormSubmit = event => {
    //event.preventDefault();
    if (this.state.team) {
      // API.saveTeams({
      //   teams: this.state.teams
      //   //,location: { lng: this.query.lng, lat: this.query.lat } (probably the wrong fucking format)
      // })
      //   .catch(err => console.warn(err));
    }
  };

  getLeagueTeams = league => {
    console.log(league);
    API.getTeamsbyLeague(league)
    .then(res => 
    this.setState({teams: res.data}))
    .catch(err => console.log(err))
  }

// class Teams extends Component {
//   constructor() {
//     super();


//     let Teams = this.props.state.Teams;
// /*     let optionItems = Teams.map((league) => {
    
//     } */
//   }
// };

render() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col size="sm-4">
            <Jumbotron>
              <h2>Fly Your Flag</h2>
              <h4>choose your favorite teams</h4>
            </Jumbotron>
            <FormBtn onClick={() => this.getLeagueTeams("NFL")}>
              NFL
            </FormBtn>
            <FormBtn onClick={() => this.getLeagueTeams("MLB")}>
              MLB
            </FormBtn>
            <FormBtn onClick={() => this.getLeagueTeams("NBA")}>
              NBA
            </FormBtn>
            {/* code for drop down boxes showing teams of various leagues from the fyf_teams_db */}
            {this.state.teams.length ? (
            <select>
            {this.state.teams.map(team => (
              <option value={team._id}>
                {team.name}
              </option>
            ))}
          </select>
            ) : (
              <h3>No teams </h3>
            )}

            {/* then add the selected team to the User DB in an array */}

            <FormBtn
              disabled={!(this.state.team)}
              onClick={this.handleFormSubmit}
            >
              Submit
              </FormBtn>
          </Col>
        </Row>
      </Container>
    </Wrapper>

  )
};
  
}

export default TeamChooser;