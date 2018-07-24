import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import User from '../newLogin';
import { Col, Row } from 'react-bootstrap';
import { Form, FormBtn, Input } from '../../components/Form';
import { List, ListItem } from '../../components/List';
import API from "../../utils/API"





//shows user email and teams chosen, simple.

class Profile extends Component {
  state = {
    email: localStorage.getItem('userNow'),
    teams: {},
    User: ""
  }

  
  //probably not correct. It needs to collect the team names from the corresponding user ID
  componentDidMount() {
    API.showUserTeams(this.state.email)
      .then(res => this.setState({ user: res.data }))
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
    
    return(
       
  
      <Wrapper>
          <Row>
            <Col size="sm-4">       
            <h3> your email: {this.state.email} </h3>       
              <Form>
                <Input
                  className="mt-5" 
                  style={{ width: '90%' }}
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name='password'
                  placeholder='your password'
                />
              </Form>
              <FormBtn
                disabled={!(this.state.password)}
                onClick={this.handleFormSubmit}
                >
                Reset Password
              </FormBtn>
              
              

              {this.state.teams.length ? (
                <List>
                  {this.state.user.map(teams => (
                  <ListItem key={User._id}>
                      <strong>
                      {this.state.teams}
                      </strong>
                    {/*<DeleteBtn onClick={() => this.deleteTeam(User._id)} /> */}
                  </ListItem>
                   ))}
                </List>
                ) : (
                  <h3>No Teams Chosen</h3>
                )}                
            </Col>
          </Row>
        </Wrapper>

      )         
    }
  }

    export default Profile;
   
