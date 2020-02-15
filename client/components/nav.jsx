import React from 'react'
import {updateControl} from '../actions'
import { connect } from 'react-redux'


const Nav = (props) => {
    const handleClickSearch = e => {
        if (props.control === 0) {
            props.dispatch(updateControl(1))
        }
        else { 
            props.dispatch(updateControl(0)) 
        }
       };
    return (
        <div className="nav">
        <button className="navbutton">Share</button>
        <button className="navbutton">Randon Cocktail</button>
        <button className="navbuttonsearch" onClick={handleClickSearch}>
          Search
        </button>
      </div>    
    )
}
function mapStateToProps(state) {
    return {
      control: state.control
    }
  }
  
export default connect(mapStateToProps)(Nav)