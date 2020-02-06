import React, { Component } from "react";
import { getCocktailbyId } from "../api";
import DrinkResults from "./DrinkResults";

class SearchIngredientResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: null,
      drinkImage: ""
    };
  }
  handleOnClick = e => {
    getCocktailbyId(e.target.value).then(results => {
      this.setState({
        drink: results,
        drinkImage: results.drinks[0].strDrinkThumb
      });
    });
  };
  render() {
    if (this.state.drink) {
      return (
        <div>
          <DrinkResults data={this.state.drink} image={this.state.drinkImage} />
        </div>
      );
    } else {
      return (
        <section>
          {this.props.data.drinks.map(drink => {
            return (
              <div>
                <li onClick={this.handleOnClick} value={drink.idDrink}>
                <img
                  src={drink.strDrinkThumb}
                  height="100px"
                  width="100px"
                ></img>{drink.strDrink}
                </li>
              </div>
            );
          })}
        </section>
      );
    }
  }
}
export default SearchIngredientResults;
