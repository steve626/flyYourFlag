import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn, Form, FormGroup } from '../../components/Form';
import Wrapper from "../../components/Wrapper"
import './login.css';

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
      // API.saveUser({
      //   email: this.state.email,
      //   password: this.state.password
      //   //,location: { lng: this.query.lng, lat: this.query.lat } (probably the wrong fucking format)
      // })
      // .catch(err => console.warn(err));
    }
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col size="sm-12">
            <h1>Fly Your Flag&nbsp;&nbsp;<i class="fa fa-flag"></i></h1>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <Form>
               
                <Input          
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name='email'
                  placeholder='Email'
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name='password'
                  placeholder='Password'
                />
              
              <FormBtn
                primary={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                >
                Log In
              </FormBtn>
              </Form>
            </Col>
          </Row>
        </Container>
      </Wrapper>

  )};
  
}

export default User;