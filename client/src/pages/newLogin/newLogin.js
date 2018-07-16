import React, { Component } from 'react';
import {FormGroup, Form, Button, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import './newLogin.css';

class User1 extends Component {
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
       
        return (
            <Wrapper>
           
              
              <Form horizontal className='login'>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                   Email
                 </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      Password
                    </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>;  
                


            </Wrapper>
        )
    }
}
    


export default User1;