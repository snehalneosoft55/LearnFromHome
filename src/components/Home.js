import React from 'react'

import '../assets/css/Home.css'
// import NavBars from './NavBar'
import { Container , Row, Col } from 'react-bootstrap'

import assets from '../assets/constants/images'

export default class Home extends React.Component{
    render(){
        return(
            
                <section className="homeSection">
                    <div className="homeWrapper"> 
                        <h1>Learn From Home</h1>
                        <div className="homeWrapperMenu">
                            <div className="homeWrapperMenuReg">
                               
                                <h2 className="registration" >Rgistration</h2>
                            </div>
                            <div className="homeWrapperMenuLogin">
                                <h2 className="login"> LogIn </h2>
                            </div>
                        </div>
                    </div>
                </section>
            
        )
    }
}