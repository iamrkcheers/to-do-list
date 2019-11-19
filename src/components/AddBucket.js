import React from "react";

const AddBucket = props => {
	let input;
	
	return (
		<form
			className="addForm"
			onSubmit={event => {
				event.persist();
				props.submitForm(input, event);
			}}
		>
			<input
				type="text"
				placeholder="Add a new bucket !"
				ref={node => (input = node)}
			/>
			<button type="submit" className="btn"></button>
		</form>
	);
};

export default AddBucket;
