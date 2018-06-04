import React, {Component} from "react";
import "./button.css";
import PropTypes from "prop-types";


export class Button extends Component{
	constructor(props){
		super(props);
		this.state = {
			buttonstate: this.props.disable==="disabled"? true : false
		};
	}
	render(){
		return(
			<div className="buttonDiv">
				<button className={this.props.class ||"primaryButton"} 
					onClick={this.props.onclick} disabled={this.state.buttonstate}>
					{this.props.children}
				</button>
			</div>
		);
	}
}


Button.propTypes={
	children: PropTypes.node,
	class:PropTypes.string,
	onclick:PropTypes.func.isRequired,
	disable:PropTypes.string
};
