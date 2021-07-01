import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let SP = this.props.SP;
    console.log('name',SP.name);
    return (
      <div className="card mt-2">
        <img className="card-img-top" src={SP.image} alt="..." />
        <div className="card-body text-left">
          <p>{SP.name}</p>
          <p>{SP.price}</p>
          <button className="btn btn-dark">add to cards</button>
        </div>
      </div>
    );
  }
}
