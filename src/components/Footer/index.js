import React from "react";
import "./footerStyle.css";

import Insta from "./instagram1.png";
import Twitter from "./twitter.png";
import YouTube from "./youtube.png";
import Fb from "./facebook.png";
import Linked from "./linkedin.png";
import Medium from "./medium.png";
import Git from "./github.png";

const Footer = () => {
	return (
		<footer>
			<div>
				<a target="_blank" href="https://www.facebook.com/integrify.fi/">
					<img src={Fb} />
				</a>
				<a target="_blank" href="https://twitter.com/integrify_fi">
					<img src={Twitter} />
				</a>
				<a target="_blank" href="https://www.instagram.com/integrify.fi/">
					<img src={Insta} />
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCtaFHvcXWE5CA5-bf-OSNbg/"
				>
					<img src={YouTube} />
				</a>
				<a target="_blank" href="https://medium.com/integrify">
					<img src={Medium} />
				</a>
				<a target="_blank" href="https://github.com/Integrify-Finland">
					<img src={Git} />
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/company/integrify-%C2%A9/"
				>
					<img src={Linked} />
				</a>
			</div>
			<em>Copyright © Integrify, All rights reserved.</em>
		</footer>
	);
};

export default Footer;
