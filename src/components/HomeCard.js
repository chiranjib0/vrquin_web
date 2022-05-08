import React, { Component } from "react";
import "../css/homeCard.css";

class HomeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="cardBody">
          <img src={this.props.img} alt="" />
          <h2>{this.props.heading}</h2>
          <p>{this.props.desc}</p>
          <button className="cardButton">{this.props.buttonText}</button>
        </div>
        
      </div>
    );
  }
}

export default HomeCard;
