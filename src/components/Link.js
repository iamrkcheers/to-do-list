import React from "react";

let Link = ({ active, bucketId, children, onClick }) => {
	if (active) {
		return <span className="filter-item non-active">{children}</span>;
	}
	
	return (
		<span
			className="filter-item"
			onClick={event => {
				event.preventDefault();
				onClick(bucketId);
			}}
		>
			{children}
		</span>
	);
};

export default Link;
