import React from "react";
import { updateControl, fetchRandom, } from "../actions";
import { connect } from "react-redux";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){ 
   
  }
  handleClickSearch = e => {
    if (this.props.control === 0) {
      this.props.dispatch(updateControl(1));
    } else {
      this.props.dispatch(updateControl(0));
    }
  };
  handleClickRandom = e => {
    this.props.dispatch(fetchRandom(0))
  };
  render() {
    return (
      <div className="nav">
        <button className="navbutton">Share</button>
        <button className="navbutton" onClick={this.handleClickRandom}>
          Randon Cocktail
        </button>
        <button className="navbuttonsearch" onClick={this.handleClickSearch}>
          Search
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    control: state.control,
    random: state.random
  };
}

export default connect(mapStateToProps)(Nav);
