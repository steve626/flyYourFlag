import React, { Component } from 'react';
// import './login.css';
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

const isLoggedIn = false;


//collect email and password from user, may persist on reload


  //wait until page loads and then be ready to submit the form (this may be useless)
  

  //fxn for collecting user email and password and coordinates? should location 
  //be collected here or on the map screen...?

  handleFormRegister = () => {
      if (this.state.email && this.state.password) {
      API.createUser({
        email: this.state.email,
        password: this.state.password        
      })
      .catch(err => console.warn(err));
    } const newUser = new User ({
      email: this.state.email,
      password: this.state.password,
      teams:[]
    })
    newUser.save()
    .then(set(isLoggedIn = true)
        //sets local storage to not ask for pw again
        .then(localStorage.setItem('isLoggedIn', true))
        //changes page to choose teams
        .then(window.location.assign('/TeamChooser'))
      } else {
        window.alert("sorry, please try again");
      }    
  };

  handleFormLogIn = () => {
    //checks if there's an email and password entered
    if (this.state.email && this.state.password) {
      //checks the users DB to see if there's an email on record
    db.collection('users').findOne({ email: req.body.email}, function(err, user) {
      console.log('user found')
      .catch(err => {
        console.warn(err)
      })
      //checks to see if user and pw match
      if (user && user.password === req.body.password) {
        console.log('user and password are correct')
        //???? not right?
        .then(set(isLoggedIn = true)
        //sets local storage to not ask for pw again
        .then(localStorage.setItem('isLoggedIn', true))
        //changes page to mapview
        .then(window.location.assign('/MapView'))
      } else {
        window.alert("sorry, please try again");
      }    
    }
  } 
} else {
  window.alert('please enter an email and password');
};


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
                  placeholder='Email'/>
                </FormControl>
              </Col>
            </Row>

            {/* Password input */}
            <Row>
              <Col xs4={4} lg={12}>
                <FormControl className={classes.formControl} aria-describedby="name-helper-text">
                  <InputLabel htmlFor="name-helper">Password</InputLabel>
                  <Input id="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name='password'
                    type='password'
                   />
                  <FormHelperText id="name-helper-text">Must be longer than 6 characters</FormHelperText>
                </FormControl>
              </Col>
            </Row>

              {/* Login/Register Buttons */}
              <div className='buttons'>
              <Row>
                <Col sm={12}>
                {/* This should take the user to the profile page */}
                  <Button bsStyle="success" className='LogIn' onClick={this.handleFormLogIn} >
                     Log In
                   </Button>
                   &nbsp;
                   &nbsp;
                 <Button bsStyle="warning" className='Register'  onClick={this.handleFormRegister}>
                
                    Register
                  </Button>
                </Col>
               </Row>
             </div>
            </Grid>
          </div>
        );
      }
    }
    
    User.propTypes = {
      classes: PropTypes.object.isRequired,
    };


export default withStyles(styles)(User);
