import React, { Component } from "react";
import { getCocktailbyId } from "../api";
import DrinkResults from "./DrinkResults";

class SearchIngredientResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: null,
      drinkImage: "",
      drinkName: "",
      drinkIngredient: [],
      category: "",
      glass: "",
      instructions: ""
    };
  }
  handleOnClick = e => {
    getCocktailbyId(e.target.value).then(results => {
      for (let i = 1; i < 15; i++) {
        let ing = ["strIngredient" + i];
        let measure = ["strMeasure" + i];
        if (results.drinks[0][ing]) {
          this.state.drinkIngredient.push({
            ing: results.drinks[0][ing],
            measure: results.drinks[0][measure]
          });
        }
      }
      this.setState({
        drink: results,
        drinkImage: results.drinks[0].strDrinkThumb,
        drinkName: results.drinks[0].strDrink,
        category: results.drinks[0].strAlcoholic,
        glass: results.drinks[0].strGlass,
        instructions: results.drinks[0].strInstructions
      });
    });
  };
  render() {
    if (this.state.drink) {
      return (
        <div>
          <DrinkResults
            image={this.state.drinkImage}
            name={this.state.drinkName}
            ingredients={this.state.drinkIngredient}
            category={this.state.category}
            glass={this.state.glass}
            instructions={this.state.instructions}
          />
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
                  ></img>
                  {drink.strDrink}
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
