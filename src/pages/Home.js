import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/css/Home.css'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <section className="homeSection">
                    <div className="homeWrapper"> 
                        <h1 className=" title ">Learn From Home</h1>
                        <div className="homeWrapperMenu">
                            <div className="homeWrapperMenuReg">
                               <Link 
                                    to="/Registration" 
                                    style={{textDecoration:'none'}}>
                                        <h2 className="registration" >Registration</h2>
                                </Link>
                            </div>
                            <div className="homeWrapperMenuLogin">
                            <Link 
                                to="/LogIn" 
                                style={{textDecoration:'none'}}>
                                    <h2 className="registration" >LogIn</h2>
                            </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div classname="footerWrapper">
                        <p className="footerTagLine">
                            Teaching in the Internet age means we must 
                            teach tomorrow’s skills today.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}