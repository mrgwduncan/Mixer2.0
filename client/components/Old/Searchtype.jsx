import React, { Component } from "react";
import { searchByIngredient } from "../../api";
import SearchIngredientResults from "../SearchIngredientResults";

class SearchIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      drinks: null,
      name: null
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //change

  //search
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name != null){
    searchByIngredient(this.state.ingredient).then(results => {
      this.setState({ drinks: results });
    });}
  };
  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.search}>
          <label>By type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Enter Ingredient "
            onChange={this.props.change}
          ></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default SearchIngredient;
