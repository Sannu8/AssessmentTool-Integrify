import React from 'react';
import propTypes from 'prop-types';

function SortableTableHead({handleSortData,title}) {
	return (
		<div className="title">
			<span className="head__span">{title}</span>
			<span className="head__span">
				<div
					onClick={() => handleSortData( true)}
					className="arrow-up"
				/>
				<div
					onClick={() =>handleSortData( false)}
					className="arrow-down"
				/>
			</span>
		</div>
	);
}

SortableTableHead.propTypes={
	handleSortData:propTypes.func,
	title:propTypes.string,
};

export default SortableTableHead;
