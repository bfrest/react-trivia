import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import axios from "axios";
//import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: []
    };

    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentDidMount() {
    axios.get("http://practiceapi.devmountain.com/api/trivia/questions").then(res => this.setState({ questions: [...res.data] }));
  }

  handleNextPage() {
    // loads the next page of questions
    axios.get("http://practiceapi.devmountain.com/api/trivia/questions?page=1").then(res => this.setState({ questions: [...res.data] }));
  }

  handlePreviousPage() {
    //loads the last page of questions
    axios.get("http://practiceapi.devmountain.com/api/trivia/questions").then(res => this.setState({ questions: [...res.data] }));
  }

  checkAnswer(currentlySelected, answer, questionId, optionId) {
    // I needed to add the s in front of the id because they start with numbers and css doesn't allow selectors to start with a number
    let questionWrapper = document.querySelector(`.${questionId}`);
    let currentOption = document.querySelector(`.${optionId}`);
    //let allOptions = document.querySelectorAll("");

    // changes the color on the currently selected option
    currentOption.classList.add("current");

    if (currentlySelected === answer) {
      // changes the color on the whole div
      questionWrapper.classList.remove("incorrect");
      questionWrapper.classList.add("correct");
    } else {
      questionWrapper.classList.remove("correct");
      questionWrapper.classList.add("incorrect");
    }
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
              <div key={question._id} className={`question-wrapper s${question._id}`}>
                <h3>{question.question}</h3>

                <ul>
                  <li className={`s${question._id}1`} onClick={() => this.checkAnswer(1, question.correct_answer, `s${question._id}`, `s${question._id}1`)}>
                    {question.options[1]}
                  </li>
                  <li className={`s${question._id}2`} onClick={() => this.checkAnswer(2, question.correct_answer, `s${question._id}`, `s${question._id}2`)}>
                    {question.options[2]}
                  </li>
                  <li className={`s${question._id}3`} onClick={() => this.checkAnswer(3, question.correct_answer, `s${question._id}`, `s${question._id}3`)}>
                    {question.options[3]}
                  </li>
                  <li className={`s${question._id}4`} onClick={() => this.checkAnswer(4, question.correct_answer, `s${question._id}`, `s${question._id}4`)}>
                    {question.options[4]}
                  </li>
                </ul>
              </div>
            );
          })}
          {/* Make it so the link with get the next page of questions {?page=1} */}
          <a className="change-page" onClick={this.handlePreviousPage}>
            Previous Page
          </a>
          <br />
          <a className="change-page" onClick={this.handleNextPage}>
            Next Page
          </a>
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

export default App;
