import React from "react";
import {Button} from "../Button-generic/Buttons";
import github from "../../assets/github.png";
import GenerIcon from "./GenericIcon";


const handleClick = ()=>{
	console.log("Hello world from clicking button component");
};

const ButtonDisplay = () => {
	return (
		<div>
			<Button class="primaryButton" onclick={handleClick}>
				<GenerIcon icon={github}/>
				Login with Twitter
			</Button>
			

		</div>
	);
	
};

export default ButtonDisplay;