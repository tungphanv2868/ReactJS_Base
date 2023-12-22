import React, { Component } from 'react'
import ItemShoes from './ItemShoes'

export default class ListShoes extends Component {
    renderListShoe = () => {
        return this.props.list.map((item, index) => {
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
