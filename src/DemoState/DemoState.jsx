import React, { Component } from 'react'

export default class DemoState extends Component {
    state = {
        number: 1,
        userName: "Alice",
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1,
        }, () => {
            console.log(this.state.number);
        });
    };
    handleDescrease = () => {
        this.setState({
            number: this.state.number - 1,
        });
        console.log("Giam");
    };

    handleChangeName = (name) => {
        this.setState({userName: name});
    };
  render() {
    return (
      <div className='text-center'>
        <button onClick={this.handleDescrease} className='btn btn-danger'>-</button>
        <span className='mx-5 display-4'>{this.state.number}</span>
        <button onClick={this.handleIncrease} className='btn btn-success'>+</button>

        {/* Dùng toán tử 3 ngôi */}
        <h2 className={` display-4 ${this.state.userName == "Alice" ? "text-warning" : "text-secondary"}`}>{this.state.userName}</h2>
        {/* Hàm có tham số : bọc lại bằng arrow fuction */}
        <button onClick={() => {
            this.handleChangeName("Bob");
        }} className='btn btn-btn-secondary'>change to Bob</button>

        <button onClick={() => {
            this.handleChangeName("Alice");
        }} className='btn btn-warning'>change to Alice</button>
      </div>
    )
  }
}
