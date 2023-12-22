import React, { Component } from "react";

export default class ItemShoes extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={image} alt="." />
        
        <div className="card-body p-0">
          <small>{name}</small>
          <p className="card-text">
          
            <button onClick={() => {
              this.props.handleAddToCard(this.props.item);
            }} className="btn btn-primary mr-2">Add</button>

            <button className="btn btn-info">View</button>
          </p>
        </div>
      </div>
    );
  }
}
