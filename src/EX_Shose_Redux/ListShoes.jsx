import React, { Component } from 'react'
import ItemShoes from './ItemShoes'
import { connect } from 'react-redux';

 class ListShoes extends Component {
    renderListShoe = () => {
        return this.props.shoeArr.map((item, index) => {
            return <ItemShoes
            handleAddToCard = {this.props.handleAddToCard}
             item = {item} key={index}/>;
        });
    };
  render() {
    return (
      <div className='col-6 row'>
        {this.renderListShoe()}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    shoeArr : state.ShoeReducer.shoeArr,
  };
};

export default connect (mapStateToProps)(ListShoes);