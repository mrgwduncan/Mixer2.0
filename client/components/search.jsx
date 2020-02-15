import React from "react";
import { connect } from "react-redux";
import { updateControl, setSelected, setType } from "../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      type: e.target.id
    });
  };

  handleSelectSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setType(this.state.type));
    this.props.dispatch(setSelected(this.state.select));
    this.props.dispatch(updateControl(2));
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="searchpanel">
        <h2>Search for a cocktail</h2>
        <div className="search">
          <form onSubmit={this.handleSelectSubmit}>
            <label>By ingredient:</label>
            <input
              id="ingredient"
              type="text"
              name="select"
              placeholder="Enter Ingredient "
              onChange={this.handleChange}
            ></input>
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="search">
          <form onSubmit={this.handleSelectSubmit}>
            <label>By name: </label>
            <input
              id="name"
              type="text"
              name="select"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="search">
          <form onSubmit={this.handleSelectSubmit}>
            <label>By catagory:</label>
            <select
              defaultValue={"DEFAULT"}
              id="catagory"
              name="select"
              onChange={this.handleChange}
            >
              <option value="Ordinary_Drink">Ordinary Drink</option>
              <option value="Cocktail">Cocktail</option>
              <option value="Milk / Float / Shake">Milk / Float / Shake</option>
              <option value="Other/Unknown">Other/Unknown</option>
              <option value="Cocoa">Cocoa</option>
              <option value="Shot">Shot</option>
              <option value="Coffee / Tea">Coffee / Tea</option>
              <option value="Homemade Liqueur">Homemade Liqueur</option>
              <option value="Punch / Party Drink">Punch / Party Drink</option>
              <option value="Beer">Beer</option>
              <option value="Soft Drink / Soda">Soft Drink / Soda</option>
              <option value="DEFAULT" disabled selected>
                Select a catagory
              </option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="search">
          <form onSubmit={this.handleSelectSubmit}>
            <label>By type:</label>
            <select
              defaultValue={"DEFAULT"}
              id="type"
              name="select"
              onChange={this.handleChange}
            >
              <option value="Alcoholic">Alcoholic</option>
              <option value="Non_alcoholic">Non alcoholic</option>
              <option value="Optional_alcohol">Optional alcohol</option>
              <option value="DEFAULT" disabled selected>
                Select a type
              </option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="search">
          <form onSubmit={this.handleSelectSubmit}>
            <label>By first letter:</label>
            <input
              id="first"
              type="text"
              name="select"
              placeholder="Enter a letter "
              onChange={this.handleChange}
            ></input>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps)(Search);
