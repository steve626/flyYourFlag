import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn, Form } from '../../components/Form';
import Wrapper from "../../components/Wrapper"
import API from '../../utils/API';

//collect email and password from user, may persist on reload
class User extends Component {
  state = {
    email: "",
    password: ""
    // ??? should we collect an initial location here? 
    //,location: ""
  };

  //wait until page loads and then be ready to submit the form (this may be useless)
  componentDidMount() {
    this.handleFormSubmit();
  }

  //fxn for collecting user email and password and coordinates? should location 
  //be collected here or on the map screen...?

  handleFormSubmit = event => {
    //event.preventDefault();
    if (this.state.email && this.state.password) {
      API.saveUser({
        email: this.state.email,
        password: this.state.password
        //,location: { lng: this.query.lng, lat: this.query.lat } (probably the wrong fucking format)
      })
      .catch(err => console.warn(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col size="sm-4">
              <Jumbotron>
                <h2>Fly Your Flag</h2>
                <h4>find your fellow fans</h4>
              </Jumbotron>
              <Form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name='email'
                  placeholder='your email (required)'
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name='password'
                  placeholder='your password (at least 6 characters)'
                />
              </Form>
              <FormBtn              
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                >
                Log In
              </FormBtn>
            </Col>
          </Row>
        </Container>
      </Wrapper>

  )};
  
}

export default User;