import React from 'react';
import NotFoundImage from '../images/404.jpg';
import './index.scss';

const NotFound = () => {
	return (
		<section>
			<div className="error-message-content">
				<article className="error-message">Oops!</article>
				<article className="error-message">404 error</article>
				<h4>The page you are looking does not exist</h4>
			</div>
			<span className="go-back">Go Back to Home</span>
			<div className="not-found">
				<img src={NotFoundImage} alt="404 error" />
			</div>
		</section>
	);
};

export default NotFound;
