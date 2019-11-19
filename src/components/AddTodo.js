import React from "react";
import { Link } from "react-router-dom";

const AddTodo = props => {
	let input;

	return (
		<>
			<Link
				to='/'
				className="backBtn"
			>
				{"< back"}
			</Link>
			<form
				className="addForm"
				onSubmit={event => {
					event.persist();
					props.submitForm(input, event);
				}}
			>
				<input
					type="text"
					placeholder="What should be done ?"
					ref={node => (input = node)}
				/>
				<button type="submit" className="btn"></button>
			</form>
		</>
	);
};

export default AddTodo;
