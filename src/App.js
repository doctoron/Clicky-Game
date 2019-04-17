import React, { Component } from "react";
import FriendCard from "./components/PeopleCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import people from "./people.json";

import "./App.css";


// Shuffle array of people function
let shufflePeople = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set initial state 
  state = {
    people,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore === this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handlePeople();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try again. You've already selected this face!",
      clicked: []
    });
    this.handlePeople();
  };
  // Function to reshuffle people after state changed by click
  handlePeople = () => {
    let shuffledPeople = shufflePeople(people);
    this.setState({ people: shuffledPeople });
  };

  render () {
    return (
      <Wrapper>
        <Nav
          title="Can You Remember... Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Test Your Memory By Clicking On These Unique Faces One Time Only!
        </Title>

        <Container>
          <Row>
            {this.state.people.map(people => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={people.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={people.id}
                  image={people.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;