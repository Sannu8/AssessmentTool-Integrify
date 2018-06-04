--------------------------------- Generic Button -----------------------------------------------

A button component that can be used in a generic context.

Features:
1. Four(4) major variants based on class name and render size {"primaryButton", "secondaryButton", "tertiaryButton" and "dangerButton"}. It also take custom class names that can then be styled different from the shipped styles.

2. This button component was structured by using React composition and props.

3. It is exported as a named export module and as such must be imported by using name importation.

4. It takes node elements as it child props: check " index.js" for example usage.

5. takes three (3) props i.e. 
        i. onclick : a mandatory function to execute what the button will do.
        ii. diable : a string("disabled") to activate the button's disabled state.
        iii.class : to specify a className for the button , a choice from item 1. above or a customized string is expected.

6. The Button icon is not mandatory. However, where there is need for an icon, it must be added as a childnode component. included in the folder is a genericIcon component that accepts "icon" as a props where the intended icon/image can be passed to the genericIcon component.

-------------------------------- Thank me Later.-----------------------------------------


================= Example Usage ===================

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

====================================== ===================