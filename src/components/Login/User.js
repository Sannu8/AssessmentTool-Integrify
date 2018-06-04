import React, { Component } from "react";
import "./login.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { resetState } from "../../redux/actions";
import { userSelector } from "../../redux/selectors";
import PropTypes from "prop-types";

class User extends Component {
	handleLogout = () => {
		this.props.logout();
		this.props.history.push("/app/home");
	};

	CorrectPassword = () => {
		return (
			<div>
				{`You are welcome ${this.props.user[0].firstName}...`}
				<form
					onSubmit={e => {
						this.handleLogout(e);
					}}
				>
					<input type="submit" value="Logout" />
				</form>
			</div>
		);
	};

	render() {
		return (
			<div>
				{this.props.user[0].flag === "error"
					? this.handleLogout()
					: this.CorrectPassword()}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: userSelector(state)
	};
};
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(resetState())
	};
};

User.propTypes = {
	user: PropTypes.any,
	logout: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
