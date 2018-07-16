import React, { Component } from 'react';
import './loginv2.css';
import API from "../../utils/API";
import Wrapper from '../../components/Wrapper';
import {Grid, Row, Col } from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, InputGroup} from 'react-bootstrap';
import styles from '../../css/text.css';




class User2 extends Component {
    state = {
      email: "",
      password: ""
    };

    handleInputChange = event => {
      const { name, value } = event.target;
         this.setState({
           [name]: value
         });
     };

     render(){
         return(
            <Wrapper>
                 <h4 className={styles.h4}>Fly Your Flag&nbsp;&nbsp;<i className="fa fa-flag"></i></h4>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                             Email
                        </Col>
                    <Col sm={10} lg={5} >
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                    <Col sm={10} lg={5}>
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
                </Form>
            </Wrapper>
         )
     }
}

export default User2;