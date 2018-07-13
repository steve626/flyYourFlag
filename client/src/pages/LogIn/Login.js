import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import Wrapper from "../../components/Wrapper"
import './login.css';
import API from "../../utils/API";

// Material-UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import flagBanner from '../../components/Form';
import Typography from '@material-ui/core/Typography';


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
       <div>
        <Typography variant="subheading" gutterBottom>
            <h4>Fly Your Flag&nbsp;&nbsp;<i className="fa fa-flag"></i></h4>
          </Typography>
        
        <Grid container justify = "center" style={{ minHeight: '100vh' }}   direction= 'column'>
        
        
       
         
         <div className={classes.container}>

         <Grid item xs>
         
           <FormControl className={classes.formControl}>
             <InputLabel htmlFor="name-simple">Email</InputLabel>
             <Input id="email" 
               value={this.state.email} 
               onChange={this.handleInputChange} 
               name='email'
               placeholder='Email'/>
           </FormControl>
          </Grid>

           <Grid item xs>
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
              </Grid>

              <Grid item xs>
              
              <Button variant="contained" className={classes.button}>
                   Log In
                </Button>
                </Grid>
            </div>
            </Grid>
            </div>
          
            
          
         
         
          
        );
      }
    }
    
    User.propTypes = {
      classes: PropTypes.object.isRequired,
    };

//   render() {
//     return (
//       <Wrapper>
//         <Container>
//           <Row>
//             <Col size="sm-12">
//             <h1>Fly Your Flag&nbsp;&nbsp;<i className="fa fa-flag"></i></h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="sm-12">
//               <Form>               
//                 <Input          
//                   value={this.state.email}
//                   onChange={this.handleInputChange}
//                   name='email'
//                   placeholder='Email'
//                 />
//                 <Input
//                   value={this.state.password}
//                   onChange={this.handleInputChange}
//                   name='password'
//                   placeholder='Password'
//                 />
//                 <FormBtn
//                   type='success'
//                   value={!(this.state.email && this.state.password)}
//                   onClick={this.handleFormSubmit}
//                   >
//                   Log In
//                 </FormBtn>
//                 <FormBtn 
//                   type='info'
//                   >
//                   Register 

//               </FormBtn>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </Wrapper>

//   )};
  
// }


export default withStyles(styles)(User);