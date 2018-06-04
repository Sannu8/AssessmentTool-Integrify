import React from 'react';
import './breadcrumb.scss';

class Breadcrumb extends React.Component {
	render() {
		return (
			<section>
				<span className="section__span">Dashboard </span>
				<i className="fa fa-angle-right fa-1x" />
			</section>
		);
	}
}

export default Breadcrumb;
