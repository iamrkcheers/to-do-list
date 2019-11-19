import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = props => {
  let renderedElement = undefined;
  let input;

  if (!props.isEditable)
    renderedElement = (
      <>
        <span className="todoItem" onClick={props.onClick} style={props.styles}>
          {props.text}
        </span>
        <span className="editBtn" onClick={props.onEditTodo}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </span>
        <span className="deleteBtn" onClick={props.onDeleteTodo}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </>
    );
  else
    renderedElement = (
      <form
        className="editForm"
        onSubmit={event => {
          event.persist();
          props.submitForm(input, event);
        }}
      >
        <input
          type="text"
          className="editableField"
          defaultValue={props.text}
          onChange={event => {
            event.persist();
            props.handleChange(input, event);
          }}
          ref={node => (input = node)}
        />
        <button type="submit" className="btn"></button>
      </form>
    );
  
  return <li>{renderedElement}</li>;
};

export default Todo;
