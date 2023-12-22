import React, { Component } from "react";

export default class DataBinding extends Component {
  userName = 'alice@gmail.com';
  
  render() {
  
    let avatar = 'https://s2.coinmarketcap.com/static/img/coins/200x200/8766.png';

    return (
      <div>
      {/* inline style */}
        <div className="card text-left" style={{width:"300px", backgroundColor:"blue"}}>
          <img className="card-img-top" src={avatar} alt />
          <div className="card-body">
            <h4 className="card-title">{this.userName}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
