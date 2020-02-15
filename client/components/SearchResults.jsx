import React from "react";
import { connect } from "react-redux";
import { fetchByIngredient, fetchByName, fetchByCatagory, fetchByType, fetchByFirst} from "../actions";
import { setIndentifier } from "../actions";
import { updateControl } from "../actions";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log()
    switch (this.props.type) {
      case "ingredient":
        this.props.dispatch(fetchByIngredient(this.props.selected))
        break;
      case "name":
        this.props.dispatch(fetchByName(this.props.selected))
        break;
      case "catagory":
        this.props.dispatch(fetchByCatagory(this.props.selected))
        break;
      case "type":
        this.props.dispatch(fetchByType(this.props.selected))
        break;
      case "first":
        this.props.dispatch(fetchByFirst(this.props.selected))
        break;
      default:
        console.log("you should never see this ERROR")
    }
  }
  handleOnClick = id => {
    this.props.dispatch(setIndentifier(id));
    this.props.dispatch(updateControl(3));
  };
  render() {
    console.log(this.props.drink)
    return (
      <div className="resultscontainer">  
        {this.props.drink.map(drink => {
          return (
            <div
              className="results"
              onClick={() => this.handleOnClick(drink.idDrink)}
            >
              <li>{drink.strDrink}</li>
              <br />
              <img
                className="svg-border-mask"
                src={drink.strDrinkThumb}
                height="100px"
                width="100px"
              ></img>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    drink: state.search.drinks,
    selected: state.selected,
    type:state.type
  };
}

export default connect(mapStateToProps)(SearchResults);
