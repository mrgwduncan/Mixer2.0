import React from "react";
import { fetchRandom } from "../actions";
import { connect } from "react-redux";
import { setIndentifier } from "../actions";
import { updateControl } from "../actions";

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = id => {
    this.props.dispatch(setIndentifier(id));
    this.props.dispatch(updateControl(3));
  };

  displayDrinks = () => {
    return (
      <React.Fragment>
        <div
          className="singleone"
          onClick={() =>
            this.handleOnClick(this.props.randomOne.drinks[0].idDrink)
          }
        >
          <img src={this.props.randomOne.drinks[0].strDrinkThumb}></img>
          <h4>{this.props.randomOne.drinks[0].strDrink}</h4>
        </div>
        <div
          className="singletwo"
          onClick={() =>
            this.handleOnClick(this.props.randomTwo.drinks[0].idDrink)
          }
        >
          <img src={this.props.randomTwo.drinks[0].strDrinkThumb}></img>
          <h4>{this.props.randomTwo.drinks[0].strDrink}</h4>
        </div>
        <div
          className="singlethree"
          onClick={() =>
            this.handleOnClick(this.props.randomThree.drinks[0].idDrink)
          }
        >
          <img src={this.props.randomThree.drinks[0].strDrinkThumb}></img>
          <h4>{this.props.randomThree.drinks[0].strDrink}</h4>
        </div>
      </React.Fragment>
    );
  };  
  componentDidMount() {
    if (this.props.randomOne.drinks[0].strDrink.length == 0) {
      this.props.dispatch(fetchRandom(1));
    }
    if (this.props.randomTwo.drinks[0].strDrink.length == 0) {
      this.props.dispatch(fetchRandom(2));
    }
    if (this.props.randomThree.drinks[0].strDrink.length == 0) {
      this.props.dispatch(fetchRandom(3));
    }
  }
  render() {
    return (
      <div className="displayimages">
        {this.props.randomThree.drinks[0].strDrink.length > 0 &&
          this.displayDrinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    randomOne: state.randomCocktailOne,
    randomTwo: state.randomCocktailTwo,
    randomThree: state.randomCocktailThree
  };
}

export default connect(mapStateToProps)(DisplayImage);
