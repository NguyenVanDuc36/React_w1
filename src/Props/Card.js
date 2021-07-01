import React, { Component } from "react";

export default class Card extends Component {
  render() {

    let SP = this.props.SP;
    
    return (
      <div className="container">
        <div className="card" style={{width:400}}>
            <div></div>
          <img
            src={SP.image}
            className="card-img-top"
            alt
          />
          <div className="card-body">
            <p>{SP.name}</p>
            <p>{SP.gia} </p>
          </div>
        </div>
      </div>
    );
  }
}
