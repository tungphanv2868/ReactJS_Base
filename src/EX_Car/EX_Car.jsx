import React, { Component } from 'react'

export default class EX_Car extends Component {
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
        <img className='col-4' src={imgPath} alt="car-black" />
        <div className='col-8 mt-5'>
            <button onClick={() => {
                this.handleChangeColor("black")
            }} className='btn btn-dark'>Black</button>

            <button onClick={() => {
                this.handleChangeColor("red")
            }} className='btn btn-danger mx-5'>Red</button>

            <button onClick={() => {
                this.handleChangeColor("silver")
            }} className='btn btn-light'>Silver</button>

            <button onClick={() => {
                this.handleChangeColor("steel")
            }} className='btn btn-secondary mx-5'>Steel</button>
            
        </div>
      </div>
    )
  }
}
