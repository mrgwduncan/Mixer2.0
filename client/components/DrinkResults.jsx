import React, { Component } from "react";
function DrinkResults(props) {
  //removes null items and the image field and id field

  function removeUnwanted(drink) {
    for (let propName in drink) {
      if (drink[propName] === null || drink[propName] === undefined) {
        delete drink[propName];
      }
    }
    delete props.data.drinks[0].strDrinkThumb;
    delete props.data.drinks[0].idDrink;
    delete props.data.drinks[0].strCreativeCommonsConfirmed
    delete props.data.drinks[0].dateModified
  }
  removeUnwanted(props.data.drinks[0]);
  return (
    <div>
      <div className="" >
        {/* proforms magic returns each item in the object in a p tag */}
        {Object.keys(props.data.drinks[0]).map(function(objectKey, index) {
          var value = props.data.drinks[0][objectKey];
          return <p>{value}</p>;
        })}
      </div>
      <div className="">
        <img src={props.image}></img>
      </div>
    </div>
  );
}
export default DrinkResults;
