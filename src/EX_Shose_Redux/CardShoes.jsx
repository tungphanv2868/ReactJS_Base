import React, { Component } from 'react'
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from './data';
import { connect } from 'react-redux';

 class CardShoes extends Component {
  
  renderCard = () => {
    let { card } = this.props;
    
    return card.map((item, index) =>{
      let { name, price, image, soLuong, id } = item;
      return <tr key={index}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{name}</td>
        <td>
          <img width={100} src={image} alt="." />
        </td>
        <td>
          <button onClick={() => {
            this.props.handleChangeQuantity(id, GIAM_SO_LUONG)
          }} className='btn btn-dark'>-</button>

          <strong className='mx-3'>{soLuong}</strong>
          <button onClick={() => {
            this.props.handleChangeQuantity(id, TANG_SO_LUONG)
          }} className='btn btn-success'>+</button>
        </td>
        <td>
          <button onClick={() => {
            this.props.handleRemove(id);
          }} className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    })
  }
  render() {
    return (
      <div className='col-6'>
        <table className='table'>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Action</th>
        </table>
        <tbody>{this.renderCard()}</tbody>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    card : state.ShoeReducer.card
  };

}

export default connect (mapStateToProps)(CardShoes);