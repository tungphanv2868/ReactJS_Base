import React, { Component } from 'react'

export default class ButtonCar extends Component {
  render() {
    let { color, activeColor} = this.props;
    let isActive = color === activeColor;
    return (
        <button 
            onClick={() => {
                this.props.handleChange(color);
            }}
            style={{background: color,
              transform: `scale(${isActive ? 2 : 1})`, transition:'0.3s'
            }}
            className='btn text-white mx-5'>
            {color}
         </button>
    );
  }
}
