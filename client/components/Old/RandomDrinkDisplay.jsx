import React from "react"

function RandomDrinkDisplay(props){
  return <div>
  <h1>{props.drink.drinks[0].strDrink}</h1>
  <h2>{props.drink.drinks[0].strInstructions}</h2>
  <img src = {props.drink.drinks[0].strDrinkThumb}/>
  </div>
}







export default RandomDrinkDisplay