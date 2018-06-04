import React from 'react';
import propTypes from 'prop-types';

function SortableTableRow({classes}) {
	return (
		<div className="row-wrapper">
			{classes.map((item,i)=>{
				return (<div key={i} className="body">
					{Object.values(item).map((info,i)=>{
						return <div className="info" key={i}>{info}</div>;
					})}
					<div className="info" />
				</div>);
			})}
		</div>
	);
}

SortableTableRow.propTypes={
	classes:propTypes.array,
};

export default SortableTableRow;
