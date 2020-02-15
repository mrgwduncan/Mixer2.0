import React, { Component } from "react";
import { fetchById } from "../actions";
import { connect } from "react-redux";

class DrinkResults extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchById(this.props.id));
  }
  render() {
    return (
      <div className="drinkresults">
        {this.props.cocktail.strDrink && (
          <div className="drinkcontainer">
            <h2>{this.props.cocktail.strDrink}</h2>
            <p>{this.props.cocktail.strCategory}</p>
            <p>{this.props.cocktail.strGlass}</p>
            <p>{this.props.cocktail.strInstructions}</p>
            <ul>
              {this.props.cocktail.ingredients.map(results => (
                <li>
                  {results.ing} : {results.measure}
                </li>
              ))}
            </ul>
            <img src={this.props.cocktail.strDrinkThumb}></img>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    id: state.indentifier,
    cocktail: state.cocktail
  };
}

export default connect(mapStateToProps)(DrinkResults);
