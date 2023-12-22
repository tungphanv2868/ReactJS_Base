import React, { Component } from 'react'
import Test_Img_Car from './Test_Img_Car'
import Test_Button_Car from './Test_Button_Car'

export default class Test_EX_Car extends Component {
    state = {
        color : 'black',
        colorArr : ["black", "red", "silver", "steel"]
    }
    handleChangeImg = (color) => {
        this.setState({ color: color})
    }
    renderButtonList = () => {
      return this.state.colorArr.map((item) => {
        return <Test_Button_Car handleChange = {this.handleChangeImg} color = {item}/>
      })
    }
  render() {
    let imgPath = `./images/products/${this.state.color}-car.jpg`
    
    return (
      <div className='row '>
        <div className='col-4'>
            <Test_Img_Car imgPath = {imgPath}/>
        </div>
        <div className='col-8 m-3'>
          {this.renderButtonList()}
        </div>
      </div>
    )
  }
}
