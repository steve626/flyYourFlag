import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea, FormBtn } from '../../components/Form';

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

  handleFormSubmit = even => {
    event.preventDefault();
    if (this.state.email &&)this.state.password) {
      API.saveUser({
        email: this.state.email,
        password: this.state.password
        //,location: { lng: this.query.lng, lat: this.query.lat } (probably the wrong fucking format)
      })
      .catch(err => console.warn(err));
    }
  };

  render() {
    return (

    )
  }

 
  
}