import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./home.css";
import GenerIcon from "../Button-generic/GenericIcon";
import github from "../../assets/github.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userSelector} from "../../redux/selectors";
import PropTypes from "prop-types";
import {Button} from "../Button-generic/Buttons";

class ButtonBig extends Component {
	constructor(props){
		super(props);
		this.state = {
			span: "Username or password Incorrect!",
			buttonstate: this.props.disable==="disabled"? true : false
		};
	}

	handleClick = ()=>{
		this.props.history.push("/app/login");
	};

loginNoMessage = ()=>{
	return (
		<div className="login-container">
			<Button  class="primaryButton" label="Login with Github" onclick={this.handleClick}>
				<GenerIcon icon={github}/>
				Login With Github
			</Button>
			<div className="adminlinks">
				<Link to="/app/login-admin"><p className="admin">Admin</p></Link>
				<Link to="/app/login"><p className="signin">Already registered? Login</p></Link>
			</div>
		</div>
	);
}

loginMessage = ()=>{
	return (
		<div className="login-container">
			<span className="loginMessage">{this.state.span}</span>
			<Button icon={github} class="primaryButton" label="Login with Github" onclick={this.handleClick} />
			<div className="adminlinks">
				<Link to="/app/login-admin"><p className="admin">Admin</p></Link>
				<Link to="/app/login"><p className="signin">Already registered? Login</p></Link>
			</div>
		</div>
	);
}

render() {
	return this.props.user && this.props.user.flag !=="error" ? this.loginNoMessage() : this.loginMessage();
}
}

const  mapStateToProps= (state)=>{
	return { 
		user: userSelector(state)
	};
};


ButtonBig.propTypes = {
	user: PropTypes.object
};


export default connect(mapStateToProps, null)(withRouter(ButtonBig));
