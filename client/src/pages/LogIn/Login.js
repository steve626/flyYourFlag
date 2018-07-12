import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn, Form } from '../../components/Form';
import Wrapper from "../../components/Wrapper"
import './login.css';
import API from "../../utils/API";

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

  handleFormSubmit = () => {
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
            <Col size="sm-12">
            <h1>Fly Your Flag&nbsp;&nbsp;<i className="fa fa-flag"></i></h1>
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
                  type='success'
                  value={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                  >
                  Log In
                </FormBtn>
                <FormBtn 
                  type='info'
                  >
                  Register 

              </FormBtn>
              </Form>
            </Col>
          </Row>
        </Container>
      </Wrapper>

  )};
  
}

export default User;