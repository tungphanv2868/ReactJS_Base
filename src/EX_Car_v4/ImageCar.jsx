import React, { Component } from 'react'

export default class ImageCar extends Component {
  render() {
    let {imgPath} = this.props;
    return (
        <img className='col-4' src={imgPath} alt="car-black" />
    )
  }
}
