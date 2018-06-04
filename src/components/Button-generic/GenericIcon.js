import React from "react";
import "./genericIcon.css";
import PropTypes from "prop-types";
//import loader from "../../assets/loading.svg";



const GenerIcon = (props)=>{
	return(
		<div className="iconDiv">
			<img src={props.icon} alt="loader" className="iconImg"/>
		</div>
	);
};

export default GenerIcon;

GenerIcon.propTypes={
	icon: PropTypes.node,
};
