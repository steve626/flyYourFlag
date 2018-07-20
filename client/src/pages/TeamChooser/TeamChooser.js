import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper"
import { Col, Row, Container } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import API from "../../utils/API"




//psuedocode of choosing teams:
// 1. see dropdown boxes of different team leagues
// 2. choose league and see list of teams eg:show all teams with matching league in DB
// 3. selected team is saved to user DB 
// 4. must choose at least one team
// 5. finish button to go to map screen




class TeamChooser extends Component {
  state = {
    teams: "",
    league: ""
    // ??? should we collect an initial location here? 
    //,location: ""
  };

  //wait until page loads and then be ready to submit the form (this may be useless)
  componentDidMount() {
    this.getLeagueTeams();
    // this.getUserTeam();
  };
  

  //fxn for collecting user email and password and coordinates? should location 
  //be collected here or on the map screen...?

  

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
      <Wrapper>
        <Container>
          <Row>
            <Col size="sm-4">
             <h3 className="mt-2" style={{color:'black', textAlign:"center"}}>Choose your favorite team </h3>
            </Col>
          </Row>

          <Row>
            <Col size="sm-4">
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NFL")}>
                NFL
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>

          <Row>
            <Col size="sm-4">
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("MLB")}>
                MLB
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>

          <Row>
            <Col size="sm-4">
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NBA")}>
                NBA
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>
          <Row>
            <Col size="sm-4">
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("NHL")}>
                NHL
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>
          <Row>
            <Col size="sm-4">
              <FormBtn type="primary" onClick={() => this.getLeagueTeams("MLS")}>
                MLS
            </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>

          <Row>
            <Col size="sm-4">
              {/* code for drop down boxes showing teams of various leagues from the fyf_teams_db */}
              {this.state.teams.length ? (
                <select id="teamName" defaultValue={this.state.selectValue} onChange={this.getUserTeam} className="mt-2" style={{width:'80%'}}>;
                  {this.state.teams.map(team => (
                    <option key ={ team._id} value={ team.name }>
                      {team.name}
                    </option>
                  ))}
                </select>
              ) : (
                  <h3 className="mt-2" style={{color:'black', textAlign:"center"}}>Choose a league first...</h3>
                )}
              {/* then add the selected team to the User DB in an array */}
            </Col>
            <Col size="sm-8" />
          </Row>
          <Row>
            <Col size="sm-4">
              <FormBtn type="success"
               onSubmit={() => this.getUserTeam({ teamName: this.team.name })}
              >
              Submit
              </FormBtn>
            </Col>
            <Col size="sm-8" />
          </Row>
        </Container>
      </Wrapper>

    )
  };

}

export default TeamChooser;