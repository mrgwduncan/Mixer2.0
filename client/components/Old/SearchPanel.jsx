import React from "react";
import SearchIngredient from "./SearchIngredient.jsx";
import RandomDrink from "./RandomDrink";
import SearchName from "./searchByName/SearchName.jsx.js";
import { getCocktailByName } from "../../api.js";
import ResultsName from "./searchByName/ResultsName.jsx.js";
import { searchByIngredient } from "../../api.js";
import SearchIngredientResults from "../SearchIngredientResults";
import { getRandoCocktail } from "../../api";
import DrinkResults from "../DrinkResults";
import Searchletter from "./Searchletter"
import Searchtype from "./Searchtype"
import Searchcatagory from "./Searchcatagory"
class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleOnClick = e => {
    getRandoCocktail().then(results => {
      this.setState({ drink: results });
    });
  };

  render() {
    return (
      <div className="searchpanel">
        <br />
        <h2>Search for a cocktail</h2>
        <br />
        <SearchIngredient
          search={this.ingredientSubmitFunc}
          change={this.handleChangeIng}
        />

        <SearchName
          search={this.handleSubmitName}
          change={this.handleChangeName}
        />
        <Searchletter
          search={this.handleSubmitName}
          change={this.handleChangeName}
        />
        <Searchtype
          search={this.handleSubmitName}
          change={this.handleChangeName}
        />
        <Searchcatagory
          search={this.handleSubmitName}
          change={this.handleChangeName}
        />

        <div className="buttoncontainer"></div>
      </div>
    );
  }
}
export default SearchPanel;
