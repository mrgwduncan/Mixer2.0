import React, { Component } from "react";
import { getCocktailbyId } from "../../api";
import DrinkResults from "../DrinkResults";

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
  handleOnClick = id => {
    getCocktailbyId(id).then(results => {
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
        <div className="">
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
        <div className="resultscontainer">
          {this.props.data.drinks.map(drink => {
            return (
              <div className="results" onClick={() =>this.handleOnClick(drink.idDrink)}>
                <li onClick={this.handleOnClick} value={drink.idDrink}>
                  {drink.strDrink}
                  <br />
                  <img
                    className="svg-border-mask"
                    src={drink.strDrinkThumb}
                    height="100px"
                    width="100px"
                  ></img>
                </li>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
export default SearchIngredientResults;
