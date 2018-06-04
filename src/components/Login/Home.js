import React, { Component } from "react";
import "./button.css";
import github from "./github.png";
import {Link} from "react-router-dom";

class LandingPage extends Component {
	
	render() {
		return (
			<div className="login-container">
				<div className="login-title"><h1> Login </h1></div>
				<button type="button" className="button-integrify" onClick={()=>window.location.href = "/app/login"}>
					<img src={github} alt="github" className='github'></img> Sign up / Login With Github</button>
				<div className="adminlinks">
					<Link to="/app/login-admin"><p className="admin">Admin</p></Link>
					<Link to="/app/login"><p className="signin">Already registered? <span className="login">Login</span></p></Link>
				</div>
			</div>
		);
	}
}

export default LandingPage;
