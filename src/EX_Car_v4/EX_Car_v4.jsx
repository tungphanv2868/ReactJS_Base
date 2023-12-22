import React, { Component } from 'react'
import ImageCar from './ImageCar';
import ButtonCar from './ButtonCar';

export default class EX_Car_v4 extends Component {
    state = {
        color : 'black',
        colorArr : ["black", "red", "silver", "steel"],
    }

    handleChangeColor = (color) => {
        this.setState({ color: color})
    };

    renderButtonList = () => {
      return this.state.colorArr.map((item) => {
        return <ButtonCar activeColor = {this.state.color} handleChange = {this.handleChangeColor} color ={item}/>
      });
    };

  render() {
    let imgPath = `./images/products/${this.state.color}-car.jpg`;
    return (
      <div className='row'>
        <ImageCar imgPath = {imgPath}/>
        <div className='col-8 mt-5'>
            {this.renderButtonList()}
        </div>
      </div>
    )
  }
}
