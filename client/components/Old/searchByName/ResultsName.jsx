import React from "react";
import DrinkResults from "../../DrinkResults";
import { getCocktailbyId } from "../../../api";

class ResultsName extends React.Component {
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
          <div className="results">
            {this.props.data.drinks.map(drink => {
              return (
                <li
                  key={drink.idDrink}
                  value={drink.idDrink}
                  onClick={this.handleOnClick}
                >
                  {drink.strDrink}
                  <br />
                  <img
                    className="svg-border-mask"
                    height="100px"
                    width="100px"
                    src={drink.strDrinkThumb}
                  />
                </li>
              );
            })}
          </div>
        </div>
      )
    }
  }
}

export default ResultsName;
