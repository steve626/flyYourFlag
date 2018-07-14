import React, { Component } from 'react';
import './login.css';
import API from "../../utils/API";
import { Grid, Row, Col } from 'react-material-responsive-grid';
import { Button } from 'react-bootstrap';


// Material-UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import flagBanner from '../../components/Form';
import Typography from '@material-ui/core/Typography';
import guttersGrid from '../../components/Form';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
});


//collect email and password from user, may persist on reload


  //wait until page loads and then be ready to submit the form (this may be useless)
  

  //fxn for collecting user email and password and coordinates? should location 
  //be collected here or on the map screen...?

  // handleFormSubmit = () => {
  //     if (this.state.email && this.state.password) {
  //     API.saveUser({
  //       email: this.state.email,
  //       password: this.state.password
  //       //,location: { lng: this.query.lng, lat: this.query.lat } (probably the wrong fucking format)
  //     })
  //     .catch(err => console.warn(err));
  //   }
  // };


  class User extends Component {
    state = {
      email: "",
      password: ""
      // ??? should we collect an initial location here? 
      //,location: ""
    };

    handleInputChange = event => {
      const { name, value } = event.target;
         this.setState({
           [name]: value
         });
     };

     render() {
       const { classes } = this.props;
        return (
         
          <div className='container'>
         
           
            <Grid>
                            
             {/* This is an empty container to move objects to the center */}
            <Row>
              <Col xs4={4} lg={12}>
                 <h5>&nbsp;</h5>
              </Col>
            </Row>

             {/* Fly Your Flag banner */}
             <Row>
             <Col xs4={4} lg={12}>
              <Typography variant="subheading" gutterBottom>
                <h4>Fly Your Flag&nbsp;&nbsp;<i className="fa fa-flag"></i></h4>
              </Typography>
              </Col>
              </Row>

              {/* Email input */}
              <Row>
               <Col xs4={4} lg={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="name-simple">Email</InputLabel>
                  <Input id="email" 
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
                  value={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                  >
                  Register 
              </FormBtn>
              </FormControl>
            </Col>
          </Row> 
        </Grid>
      </div>         
  )}
}

export default User;
