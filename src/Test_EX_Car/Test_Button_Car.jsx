import React, { Component } from 'react'

export default class Test_Button_Car extends Component {
  render() {
    let { color } = this.props;
    return (
        <button onClick={()=>{
            this.props.handleChange(color)
        }}
        style={{ background : color}}
         className='btn btn-dark'>{color}</button>
    )
  }
}
