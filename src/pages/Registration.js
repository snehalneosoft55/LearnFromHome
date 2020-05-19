import React from 'react'

import { Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import '../assets/css/Registration.css';
import Inputs from '../components/Inputs';
import {RegEx} from '../assets/constants/RegEx';


export default class Registration extends React.Component{
    constructor(props){
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
            }
            
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
            default:
                break;
        }
        this.setState({errors,userInfo})
    }
    render()
    {
        const {errors} = this.state;
        console.log("err:::",errors.firstName);
        const years = [];
        let date = new Date;
        for(let i=1980 ; i<= date.getFullYear(); i++)
        {
            years.push(<option value={i}> {i} </option>)
        }
        const month = [];
        return(
            <section className="reg">
                <div className="regWrapper">
                    <h1> Registration </h1>
                    <Card className="regWrapperCard">
                        <Form className="regWrapperForm">
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
                                handleChange = {this.handleChange}
                            />
                            <span className="errorSpan">{errors.confirmPassword}</span>
                            {/* <div>
                                <select name="Years" className="Years">
                                    {years}
                                </select>
                                <select name="Month" className = "Month">
                                    <option></option>
                                </select>
                            </div> */}
                            <Button className="submitButton">Submit</Button>
                            <Button className="loginButton">LogIn</Button>
                        </Form>
                    </Card>
                </div>
            </section>
        )
    }
}