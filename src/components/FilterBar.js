import FilterLink from "../containers/FilterLink";
import React from "react";

let FilterBar = () => {
	return (
		<div className="filters">
			<FilterLink filter="SHOW_ALL">All</FilterLink>
			<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
			<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
		</div>
	);
};

export default FilterBar;
