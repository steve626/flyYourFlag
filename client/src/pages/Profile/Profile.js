import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import {List, ListItem } from '../../List';
import User from '../LogIn';
import { userInfo } from 'os';
//shows user email and teams chosen, simple.

class Profile extends Component {
  state = {
    email: User.email,
    teams: []
  }

  //probably not correct. It needs to collect the team names from the corresponding user ID
  componentDidMount() {
    API.getTeams(this.props.match.params.id)
      .then(res => this.setState({ teams: res.data }))
      .catch(err => console.warn(err));
  }
  //change password if text entered into fields
  handleInputChange = event => {
    const { password, value } = event.target;
    this.setState({
      [password]: value
    });
  };

  render() {
    return (
      <Wrapper>
        <Container fluid>
          <Row>
            <Col size="sm-4">
              <Jumbotron>
                <h2>Fly Your Flag</h2>
                <h4>Your teams</h4>
                <h4>Change your Password</h4>
              </Jumbotron>
              {this.state.teams.length ? (
                <List>
                  {this.state.teams.map(team => (
                  <ListItem key={user._id}>
                      <strong>
                      {team.name} in {team.league}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteTeam(user._id)} />
                  </ListItem>
                   ))}
                </List>
                ) : (
                  <h3>No Teams Chosen</h3>
                )}
              <Form>
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name='password'
                  placeholder='your password (at least 6 characters)'
                />
              </Form>
              <FormBtn
                disabled={!(this.state.password)}
                onClick={this.handleFormSubmit}
                >
                Reset Password
              </FormBtn>                
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }

}


