import React, { Component } from 'react'
import { connect } from 'react-redux';

 class DetailShoes extends Component {
  render() {
    let { image } = this.props.detail;
    return (
      <div>
        <img src={image} alt="" />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    detail : state.ShoeReducer.detail
  };
};
export default connect(mapStateToProps)(DetailShoes);
