import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return (
      <div class="question-wrapper">
        <h3>{/* Question */}</h3>
        <div>{/* Difficulty */}</div>
        <div class="gear">
          <img src="/styles/assets/gear.svg" alt="" />
        </div>
        <ul>
          <li>
            {/* Repeated for each option */}
            <input type="radio" />
            <label>{/*Option text */}</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Question;
