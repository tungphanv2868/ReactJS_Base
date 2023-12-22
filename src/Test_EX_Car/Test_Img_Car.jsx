import React, { Component } from 'react'

export default class Test_Img_Car extends Component {
  render() {
    let { imgPath } = this.props;
    return (
        <img src={imgPath} alt="carblack" />
    )
  }
}
