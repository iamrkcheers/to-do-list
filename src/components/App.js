import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FilterBar from "./FilterBar";
import AddBucketContainer from "../containers/AddBucketContainer";
import BucketListContainer from "../containers/BucketListContainer";
import AddTodoContainer from "../containers/AddTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";

let App = () => {
  const getDate = date => new Date(date);
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <BrowserRouter>
      <div className="block">
        <div className="info-date">
          <div className="date">{getDate(Date.now()).toLocaleDateString()}</div>
          <div className="day">{days[getDate(Date.now()).getDay()]}</div>
        </div>
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <AddBucketContainer />
              <BucketListContainer />
            </div>
          )}
        />
        <Route
          exact
          path="/bucket/:bucketId"
          render={props => (
            <div>
              <AddTodoContainer />
              <FilterBar />
              <TodoListContainer />
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
