import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { getCocktailByName } from "../api.js";
import { searchByIngredient } from "../api.js";
import { getRandoCocktail } from "../api";
import Search from "./Search"
import DisplayImage from "./DisplayImage.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      showResults: 0,
      nameResults: null,
      nameSearch: "",
      nameCocktailsList: null,
      ingredientResult: null,
      ingSearch: "",
      ingCocktailsList: null,
      randomResult: null,
      drinkImage: "",
      drinkName: "",
      drinkIngredient: [],
      category: "",
      glass: "",
      instructions: "",
    };
  }

  handleSearch = e => {
    if (this.state.search) {
      this.setState({
        search: null
      })
     } else {
      this.setState({
        search: 1
      })
    }
  }
  handleSubmitName = e => {
    e.preventDefault();
    getCocktailByName(this.state.nameSearch).then(cocktails => {
      this.setState({
        nameCocktailsList: cocktails,
        showResults: 1,
        showIngredient: false,
        showRandom: false
      });
    });
  };

  handleChangeName = e => {
    this.setState({
      nameSearch: e.target.value
    });
  };

  handleChangeIng = e => {
    this.setState({
      ingSearch: e.target.value
    });
  };

  ingredientSubmitFunc = e => {
    e.preventDefault();
    searchByIngredient(this.state.ingSearch).then(results => {
      this.setState({ ingCocktailsList: results, showResults: 2 });
    });
  };

  getRandom = e => {
    getRandoCocktail().then(results => {
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
        instructions: results.drinks[0].strInstructions,
        showResults: 3
      });
    });
  };

  home = () => {
    this.setState({
      showResults: 5
    });
  };

  render() {
    return (
        
      <div className="container">
        {this.state.search == 1 && (
            <Search data={this.state.nameCocktailsList} />
          )}
        <Header />
        <div className="nav">
          <button className="navbutton">Share</button>
          <button className="navbutton">Randon Cocktail</button>
          <button className="navbuttonsearch" onClick={this.handleSearch}>Search</button>
        </div>
          <DisplayImage />

      
        {/* <div className="searchpanel">
          <div className="searchfade">
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
            <div className="buttoncontainer">
              <RandomDrink search={this.getRandom} />
              <button className="home-button" onClick={this.home}>
                Reset
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="displaypanel">
          {this.state.showResults == 1 && (
            <ResultsName data={this.state.nameCocktailsList} />
          )}
          {this.state.showResults == 2 && (
            <SearchIngredientResults data={this.state.ingCocktailsList} />
          )}
          {this.state.showResults == 3 && (
            <DrinkResults
              image={this.state.drinkImage}
              name={this.state.drinkName}
              ingredients={this.state.drinkIngredient}
              category={this.state.category}
              glass={this.state.glass}
              instructions={this.state.instructions}
            />
          )}
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
