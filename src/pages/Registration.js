import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Button, Container } from 'react-bootstrap';
import {Row , Col} from 'react-bootstrap'

import '../assets/css/Registration.css';
import Inputs from '../components/Inputs';
import {RegEx} from '../assets/constants/RegEx';
import {postUserInfo}  from '../actions/RegistrationAction'
import { connect } from 'react-redux'


let valid = true;
let forbutton;
const validateForm = (users) => {
    console.log("in validateForm");
    
    Object.values(users).forEach(
        (val) => {
            if(val===''){valid = false;}
            else{valid=true;}
        }  
    );
    return valid;
}
 class Registration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo : {
                firstName : '' ,
                lastName : '' ,
                email : '' ,
                username : '',
                password : '' ,
                confirmPassword : ''
            },
            errors:{
                firstName : '',
                lastName : '',
                email : '',
                username : '',
                password : '',
                confirmPassword : '' 
            },
            submitError:''

        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name , value } = event.target;
        let userInfo = this.state.userInfo;
        let errors = this.state.errors;
        switch(name)
        {
            case 'FirstName' : 
                if(value === '')
                {
                    errors.firstName = 'required';
                }
                else if( !((RegEx.Name).test(value)) )
                {
                    errors.firstName ="Only alphabates are allowed";
                }
                else
                {
                    userInfo.firstName= value;
                    errors.firstName = ''
                }
                break;
            case 'LastName' :
                if(value === '')
                {
                    errors.lastName = 'Required';
                }
                else if(!((RegEx.Name).test(value)) )
                {
                    errors.lastName = "Only alphabates are allowed";
                }
                else
                {
                    userInfo.lastName = value;
                    errors.lastName = "";
                }
                break;
            case 'EmailId':
                if(value === '')
                {
                    errors.email = "Required";
                }
                else if(!((RegEx.Email).test(value)))
                {
                    errors.email = "Only alphabates are allowed"
                }
                else{
                    userInfo.email = value;
                    errors.email = '';
                }
                break;
            case 'Username' :
                if(value === '')
                {
                    errors.username = "Required";
                }
                else 
                {
                    userInfo.username = value;
                    errors.username = '';
                }
                break;
            case 'Password' :
                if(value === '')
                {
                    errors.password = "Required"
                }
                else if(!(RegEx.Password).test(value))
                {
                    errors.password = "Only alphabates are allowed"
                }
                else 
                {
                    userInfo.password = value ;
                    errors.password = "";
                }
                break;
            case 'ConfirmPassword':
                if (value === '')
                {
                    errors.confirmPassword = "Required";
                }
                else if (userInfo.password !== value)
                {
                    errors.confirmPassword = "Password is missmatch"
                }
                else 
                {
                    errors.confirmPassword = '';
                    userInfo.confirmPassword = value;
                }
                break;
            default:
                break;
        }
        this.setState({errors,userInfo})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("in handle submit");
        if(validateForm(this.state.userInfo)){
            forbutton=true;
            this.setState({submitError:''});
            this.props.postUserInfo(this.state.userInfo);
          
        }
        else{
            forbutton=false;
            this.setState({submitError:"Enter values"});
            // console.log("Invalid form","forbutton:",forbutton);
            // alert("enter all fields");
        }
    }
    render()
    {
        const {errors} = this.state;
        const years = [];
        let date = new Date();
        for(let i=1980 ; i<= date.getFullYear(); i++)
        {
            years.push(<option value={i}> {i} </option>)
        }
        return(
            <section className="reg">
                <div className="regWrapper">
                    <h1> Registration </h1>
                    <Card className="regWrapperCard">
                        <form className="regWrapperForm" onSubmit={this.handleSubmit} action="./LogIn.js">
                           <Inputs 
                                label="First Name"  
                                name="FirstName" 
                                type="text" 
                                placeholder="First Name"
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.firstName}</span>
                            <Inputs 
                                label="Last Name" 
                                name="LastName" 
                                type="text" 
                                placeholder="Last Name" 
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.lastName}</span>
                            <Inputs 
                                label="Email Id" 
                                name="EmailId" 
                                type="email" 
                                placeholder="Email Id" 
                                handleChange = {this.handleChange}
                            /> 
                            <span className="errorSpan">{errors.email}</span>
                            <Inputs 
                                label="Username" 
                                name="Username" 
                                type="text" 
                                placeholder="UserName" 
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.username}</span>
                            <Inputs 
                                label="Password" 
                                name="Password" 
                                type="password" 
                                placeholder="Password" 
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.password}</span>
                           <Inputs 
                                label="Confirm Password" 
                                name="ConfirmPassword" 
                                type="password" 
                                placeholder="Confirm Password" 
                                style={{marginBottom : '50px'}}
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.confirmPassword}</span>
                            <Inputs
                                label="Phone No"
                                name="PhoneNo"
                                type="number"
                                placeholder="Phone No"
                            />
                            <span className="errorSpan">{errors.confirmPassword}</span>
                            
                            <div>
                                <Container>

                                <Row>
                                <Col>
                                <button  className="submitButton" type="submit">Submit</button>
                            <span className="errorSpan">{this.state.submitError}</span>
                                </Col>
                                <Col>
                                <Link to='/LogIn'><Button className="loginButton">LogIn</Button> </Link>

                                </Col>
                            </Row>
                                </Container>
                            
                            </div>
                        </form>
                    </Card>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    userData: state.userData
  });

  const mapDispatchToProps = {
    postUserInfo
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registration);