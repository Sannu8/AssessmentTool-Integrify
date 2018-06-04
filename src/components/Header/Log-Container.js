import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetState } from "../../redux/actions";
import { userSelector } from "../../redux/selectors";

import PropTypes from "prop-types";

class Log extends Component {
	handleLogout = () => {
		this.props.logout();
		this.props.history.push("/app/home");
	};

	render() {
		console.log("this.props.user", this.props.user);
		return (
			<ul className={this.props.class}>
				{this.props.user[0] && this.props.user[0].firstName ? (
					<li className="log" onClick={e => this.handleLogout(e)}>
						Logout
					</li>
				) : (
					<li>
						<Link to="/app/login" className="log">
							Login
						</Link>
					</li>
				)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: userSelector(state)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(resetState())
	};
}

Log.propTypes = {
	class: PropTypes.string,
	user: PropTypes.object
};

Log.defaultProps = {
	user: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Log));
