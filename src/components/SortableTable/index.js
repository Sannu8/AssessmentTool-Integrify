import React from "react";
import propTypes from "prop-types";
import { handleDate, handleNumber, handleAlpha } from "../../utilities/sort";
import SortableTableHead from "../SortableTableHead";
import SortableTableRow from "../SortableTableRow";
function SortableTable({ handleSortData, classes }) {
	const data = [
		{
			sortBy: "id",
			handleDataKind: handleNumber,
			title: "Id"
		},
		{
			sortBy: "name",
			handleDataKind: handleAlpha,
			title: "Name"
		},
		{
			sortBy: "participantCount",
			handleDataKind: handleNumber,
			title: "Participants"
		},
		{
			sortBy: "currentSprint",
			handleDataKind: handleNumber,
			title: "Current Sprint"
		},
		{
			sortBy: "headTeacher",
			handleDataKind: handleAlpha,
			title: "Head Teacher"
		},
		{
			sortBy: "graduationDate",
			handleDataKind: handleDate,
			title: "Graduation Date"
		},
		{
			sortBy: "plannedSprints",
			handleDataKind: handleNumber,
			title: "Planned Sprints"
		},

		{
			sortBy: "location",
			handleDataKind: handleAlpha,
			title: "Location"
		},

		{
			sortBy: "",
			handleDataKind: "",
			title: "Manage"
		}
	];
	return (
		<section className="classes">
			<div className="head">
				{data.map((item, i) => {
					return (
						<SortableTableHead
							handleSortData={isReversed =>
								handleSortData(item.sortBy, isReversed, item.handleDataKind)
							}
							title={item.title}
							key={i}
						/>
					);
				})}
			</div>
			<SortableTableRow classes={classes} />
		</section>
	);
}
SortableTable.propTypes = {
	classes: propTypes.array,
	handleSortData: propTypes.func
};
export default SortableTable;
