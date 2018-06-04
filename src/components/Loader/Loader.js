import React from "react";
import PropTypes from "prop-types";
import "./loader.css";
import loader from "../../assets/loading.svg";

const Loader = (props)=>{
	return(
		<div className="loaderContainer">
			<img src={loader || props.image} alt="loader" className="loaderImage"/>
			{props.children}
			<p className="loaderMessage">
				{"...patience, we are procesing your request" || props.message}</p>
		</div> 
	);
};

export default Loader;

Loader.propTypes={
	image: PropTypes.node,
	message:PropTypes.string,
};
