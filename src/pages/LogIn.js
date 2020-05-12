import React from 'react'
import '../assets/css/Login.css'

export default class LogIn extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>
                    log in
                </h1>
                <div style={{width:'800px',height:'400px',backgroundColor:'red'}}>
                    <p>a</p>
                </div>
                <div>
                    <button>ok</button>
                </div> */}
                <div class="login-reg-panel">
		<div class="login-info-box">
			<h2>Have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-register" for="log-reg-show">Login</label>
			<input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked"/>
		</div>
							
		<div class="register-info-box">
			<h2>Don't have an account?</h2>
			<p>Lorem ipsum dolor sit amet</p>
			<label id="label-login" for="log-login-show">Register</label>
			<input type="radio" name="active-log-panel" id="log-login-show"/>
		</div>
							
		<div class="white-panel">
			<div class="login-show">
				<h2>LOGIN</h2>
				<input type="text" placeholder="Email"/>
				<input type="password" placeholder="Password"/>
				<input type="button" value="Login"/>
				<a href="">Forgot password?</a>
			</div>
			<div class="register-show">
				<h2>REGISTER</h2>
				<input type="text" placeholder="Email"/>
				<input type="password" placeholder="Password"/>
				<input type="password" placeholder="Confirm Password"/>
				<input type="button" value="Register"/>
			</div>
		</div>
	</div>
            </div>
        )
    }
}