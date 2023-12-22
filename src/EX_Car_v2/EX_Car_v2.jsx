import React, { Component } from 'react'
import ImageCar from './ImageCar';
import ButtonCar from './ButtonCar';

export default class EX_Car_v2 extends Component {
    state = {
        color : 'black',
    }
    handleChangeColor = (color) => {
        this.setState({ color: color})
    }
  render() {
    let imgPath = `./images/products/${this.state.color}-car.jpg`;
    return (
      <div className='row'>
        <ImageCar imgPath = {imgPath}/>
        <div className='col-8 mt-5'>
            <ButtonCar handleChange = {this.handleChangeColor} color ='black'/>
            <ButtonCar handleChange = {this.handleChangeColor} color = 'red'/>
            <ButtonCar handleChange = {this.handleChangeColor} color = 'silver'/>
            <ButtonCar handleChange = {this.handleChangeColor} color = 'steel'/>
        </div>
      </div>
    )
  }
}
