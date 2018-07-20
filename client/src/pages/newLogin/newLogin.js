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
  
    state = {
      email: "",
      password: "",
    };
    
     handleInputChange = e => {
      this.setState({ [e.target.name] : e.target.value });
     };
     
     render() {
       const { classes } = this.props;
        return (
          <div className='form'>
           {/* <Wrapper> */}
              <Grid>
                <Row className='email'>
                  <Col lg={12} xs={12}>
                    <FormControl className={classes.textField} >
                      <InputLabel htmlFor="email-simple" style={{ fontSize: '20px', fontFamily: 'Raleway'}}>Email</InputLabel>
                        <Input style={{padding: '0px 0px 5px'}}
                         className={classes.textField}
                         name='email'
                         value={this.state.email}
                         onChange={this.handleInputChange.bind(this)}
                          />
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
                    </FormControl>
                  </Col>
                </Row>
                <div className='but'>
                 <Row>
                  <Col md={12} xs={12}>
                    <Button variant='contained' color="primary" style={{fontFamily: 'Raleway'}}className={classes.button}>
                      Login
                    </Button>
                    <Button variant="contained" color="default" style={{fontFamily: 'Raleway'}} className={classes.button}>
                      Sign Up
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