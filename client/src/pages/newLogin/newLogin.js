import React, { Component } from 'react';
// import {FormGroup, Form, Button, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import './newLogin.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import green from '@material-ui/core/colors/yellow'
import Button from '@material-ui/core/Button';
import API from "../../utils/API"
import FormHelperText from '@material-ui/core/FormHelperText';
//import LocationSwitch from '../../components/LocationSwitch';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: green[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: green[500],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,   
  },
  button: {
    margin: theme.spacing.unit,
    fontSize:15,
    minWidth: 143,
  },
  input: {
    display: 'none',
  },
  
});

class User1 extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

    // state = {
    //   email: "",
    //   password: ""   
      
    // };

    validatePassword = () => {
     const pass = this.state.password.length;
     console.log(pass); 
    }

    componentDidMount() {
      localStorage.setItem('isLoggedIn', false);
      localStorage.setItem('userNow', "");
      return(  console.log(localStorage.getItem('isLoggedIn'))
    )
    };
    

    handleInputChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, 
                    () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
    
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
    
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

     handleFormRegister = event => {
       event.preventDefault();
           if (this.state.email && this.state.password) {
            
      API.createUser({
        email: this.state.email,
        password: this.state.password,
        teams: [],
        coordinates: []
      })
      //sets local storage to not ask for pw again
      .then(localStorage.setItem('isLoggedIn', true))
      //saves user email to local storage for use in map view
       .then(localStorage.setItem('userNow', this.state.email))
       .catch(err => console.warn(err))
       .then(console.log(localStorage.getItem('isLoggedIn')))

       .then(this.validatePassword())
      //changes page to choose teams
      .then(window.location.assign('/TeamChooser'));
      //needs alerts for errors - email/password too short, email duplicate 
      
    }    
  
};




  handleFormLogIn = event => {
    event.preventDefault();
    //checks if there's an email and password entered
    if (this.state.email && this.state.password) {
      //checks the users DB to see if there's an email on record
    API.getUserbyEmail(this.state.email)
    .then(res => {
      if (res.data[0] && res.data[0].password === this.state.password) {
        console.log('user and password are correct')
        //saves user email to local storage for use in map view
        localStorage.setItem('userNow', this.state.email)
        //sets local storage to not ask for pw again
        localStorage.setItem('isLoggedIn', true)
        //changes page to mapview
        window.location.assign('/MapView')
      .catch(err => console.warn(err)
       )
     }
    })
  }
};


     
     render() {
       const { classes } = this.props;
        return (
          <div className='form'>
           {/* <Wrapper> */}
              <Grid>
                <Row className='email'>
                  <Col lg={12} xs={12}>
                    <FormControl className={classes.textField}>
                      <InputLabel htmlFor="name-error" style={{ fontSize: '20px', fontFamily: 'Raleway'}}>Email</InputLabel>
                        <Input style={{padding: '0px 0px 5px'}}
                         className={classes.textField}
                         name='email'
                         value={this.state.email}
                         onChange={this.handleInputChange.bind(this)}
                          />
                           <FormHelperText id="password-helper-text" style={{fontSize: '12px', marginLeft:'10px'}}>Must be a valid email</FormHelperText>
                    </FormControl>
                  </Col>
                </Row>
                <Row className='password'>
                  <Col lg={12} xs={12}>
                    <FormControl className={classes.textField} >
                      <InputLabel htmlFor="password-simple"   style={{fontSize: '20px', fontFamily: 'Raleway' }}>Password</InputLabel>
                        <Input style={{padding: '0px 0px 5px'}}
                         className={classes.textField}
                         type='password'                         
                         name='password'
                         value={this.state.password}
                         onChange={this.handleInputChange.bind(this)}
                          />
                        <FormHelperText id="password-helper-text" style={{fontSize: '12px', marginLeft:'10px'}}>password must be longer than 6 characters</FormHelperText>
                    </FormControl>
                  </Col>
                </Row>
                <div className='but'>
                 <Row>
                  <Col md={12} xs={12}>
                    <Button variant='contained' color="primary" style={{fontFamily: 'Raleway'}}className={classes.button} onClick={this.handleFormLogIn.bind(this)} >
                      Login
                    </Button>
                    <Button variant="contained" color="default" style={{fontFamily: 'Raleway'}} className={classes.button} disabled={!this.state.formValid} onClick={this.handleFormRegister.bind(this)} >
                      Register
                    </Button>
                  </Col>
                </Row>
              </div>
            </Grid>
          </div>              
        )
    }
}
    
export default withStyles(styles)(User1);

// export default User1;