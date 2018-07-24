import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { FormBtn } from '../../components/Form';
import API from "../../utils/API"
import './TeamChooser.css';
//psuedocode of choosing teams:
// 1. see dropdown boxes of different team leagues
// 2. choose league and see list of teams eg:show all teams with matching league in DB
// 3. selected team is saved to user DB 
// 4. must choose at least one team
// 5. finish button to go to map screen
class TeamChooser extends Component {
  state = {
    teams: [],
    league: ""
    // ??? should we collect an initial location here? 
    //,location: ""
  };

  //wait until page loads and then be ready to submit the form (this may be useless)
  componentDidMount() {
    this.getLeagueTeams();
    // this.getUserTeam();
  };
  
  getLeagueTeams = league => {
    console.log('league: ' + league);
    API.getTeamsByLeague(league)
      .then(res =>
        this.setState({ teams: res.data }))
      .catch(err => console.log(err))
      
  };

  getUserTeam = event => {
    let teamPicked = event.target.value;
    console.log('team: ' + teamPicked);
        let userEmail = localStorage.getItem('userNow');
      console.log('email from LS: ' + userEmail);
      API.addTeamsToUser(userEmail, teamPicked)      
      .then(data => {
        (alert("team added"))
      })
        .catch(err => console.warn(err))      
           
      
    };

  render() {
    return (

        <Grid>
          <Row>
            <Col sm={12}>
             <h3 className="mt-2" style={{color:'black', textAlign:"center"}}>Choose your favorite team </h3>
            </Col>
          </Row>
          

          <Row>
            <Col sm={12}>
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NFL")}>
                NFL
            </FormBtn>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("MLB")}>
                MLB
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>

          <Row>
            <Col sm={12}>
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NBA")}>
                NBA
            </FormBtn>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NHL")}>
                NHL
            </FormBtn>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("MLS")}>
                MLS
            </FormBtn>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              {/* code for drop down boxes showing teams of various leagues from the fyf_teams_db */}
              {this.state.teams.length ? (
                <select id="teamName" defaultValue={this.state.selectValue} onChange={this.getUserTeam} className="mt-2" style={{width:'80%'}}>;
                  {this.state.teams.map(teams => (
                    <option key ={ teams._id} value={ teams.name }>
                      {teams.name}
                    </option>
                  ))}
                </select>
              ) : (
                  <h3 className="mt-2" style={{color:'black', textAlign:"center"}}>Choose a league first...</h3>
                )}
              {/* then add the selected team to the User DB in an array */}
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormBtn type="success"
               onSubmit={() => this.getUserTeam({ teamName: this.teams.name })}
              >
              Submit
              </FormBtn>
            </Col>
          </Row>
        </Grid>

    )
  };

}

export default TeamChooser;