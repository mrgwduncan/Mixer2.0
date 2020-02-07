import React, { Component } from "react";
function DrinkResults(props) {
  return (
    <div>
      <div className="">
        <h2>{props.name}</h2>
        <p>{props.category}</p>
        <p>{props.glass}</p>
        <p>{props.instructions}</p>
        <ul>
          {props.ingredients.map(results => (
            <li>
              {results.ing} : {results.measure}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <img src={props.image}></img>
      </div>
    </div>
  );
}
export default DrinkResults;
