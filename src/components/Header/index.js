import React, { Component } from "react";
import Log from "./Log-Container";

import ham from "./hamburger.png";
import "./Header.css";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}

	render() {
		return (
			<div className="header">
				<a target="_blank" href="http://www.integrify.fi">
					<img
						src="http://www.integrify.fi/sites/all/themes/integrify/logo.svg"
						alt="integrify-logo"
						className="integrify"
					/>
				</a>

				<div
					className="hamburger"
					onClick={() => this.setState({ show: !this.state.show })}
				>
					<img src={ham} alt="" />
					<Log class={this.state.show ? "show" : "hide"} />
				</div>
			</div>
		);
	}
}
export default Header;
