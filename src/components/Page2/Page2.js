import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import axios from "axios";
//import { Link } from "react-router-dom";

class Page2 extends Component {
  constructor() {
    super();

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    axios.get("http://practiceapi.devmountain.com/api/trivia/questions?page=1").then(res => this.setState({ questions: [...res.data] }));
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.questions)}
        <div className="header">
          <div />
          <h1>Trivia Trends</h1>
          <button>
            <span>+</span> Add Question
          </button>
        </div>
        <article className="main">
          <nav className="navBar">
            <a>All Questions</a>
            <a>Easy</a>
            <a>Medium</a>
            <a>Hard</a>
            <a>Search by Animal</a>
          </nav>
          <div className="search">
            <input type="text" placeholder="Animal to search by" />
          </div>

          {/* this maps and displays all the questions that are in state */}
          {this.state.questions.map(question => {
            return (
              <div key={question._id} className="question-wrapper">
                <h3>{question.question}</h3>

                <ul>
                  <li>{question.options[1]}</li>
                  <li>{question.options[2]}</li>
                  <li>{question.options[3]}</li>
                  <li>{question.options[4]}</li>
                </ul>
              </div>
            );
          })}

          {/* Make it so the link with get the next page of questions {?page=1} */}
          <a>Next Page ></a>
        </article>

        <div className="modal">
          <form>
            <h4 className="close">X</h4>
            <span>Question</span>
            <input type="text" ng-model="<!-- Question -->" />
            <span>Animal it's about</span>
            <input type="text" ng-model="<!-- Animal -->" />
            <span>Difficulty</span>
            <div className="range">
              <input type="range" min="1" max="3" ng-model="<!-- Difficulty -->" />

              {/* <h5>{{newQuestion.difficulty}}</h5> */}
            </div>
            <h4>Options</h4>
            <div>
              <input type="radio" ng-model="" value="1" />
              <input type="text" ng-model="" />
            </div>
            <div>
              <input type="radio" ng-model="" value="2" />
              <input type="text" ng-model="" />
            </div>
            <div>
              <input type="radio" ng-model="" value="3" />
              <input type="text" ng-model="" />
            </div>
            <div>
              <input type="radio" ng-model="" value="4" />
              <input type="text" ng-model="" />
            </div>

            {/*<!--Add question buttons-->*/}
            <div className="buttons">
              <button className="green">Save Question</button>
              <button>Cancel</button>
            </div>

            {/*<!--Edit & Delete question buttons-->*/}
            <div className="buttons">
              <button className="red">Delete Question</button>
              <button className="green">Save Changes</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Page2;
