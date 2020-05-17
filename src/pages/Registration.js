import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import '../assets/css/Registration.css';
import Inputs from '../components/Inputs'


export default class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                firstName : '' ,
                lastName : '' ,
                email : '' ,
                userName : '',
                password : '' ,
                confirmPassword : ''
            },
            errors:{
                firstName : '',
                lastName : '',
                email : '',
                userName : '',
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
            if(value == '')
            {
                errors.firstName = 'required'
                console.log("in firstname empty val");
                
            }
            else{
                userInfo.firstName= value
                console.log("name::", userInfo.firstName);
            }
        }
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

                           <Inputs 
                                label="Last Name" 
                                name="LastName" 
                                type="text" 
                                placeholder="Last Name" 
                            />
                           <Inputs 
                                label="Email Id" 
                                name="EmailId" 
                                type="email" 
                                placeholder="Email Id" 
                            /> 
                           <Inputs 
                                label="Username" 
                                name="UserName" 
                                type="text" 
                                placeholder="UserName" 
                            />
                           <Inputs 
                                label="Password" 
                                name="Password" 
                                type="password" 
                                placeholder="Password" 
                            />
                           <Inputs 
                                label="Confirm Password" 
                                name="ConfirmPassword" 
                                type="password" 
                                placeholder="Confirm Password" 
                            />
                            <div>
                                <select name="Years" className="Years">
                                    {years}
                                </select>
                                <select name="Month" className = "Month">
                                    <option></option>
                                </select>
                            </div>
                        </Form>
                    </Card>
                </div>
            </section>
        )
    }
}