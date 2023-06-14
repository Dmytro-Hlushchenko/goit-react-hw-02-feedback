import FeedbackOptions from "./FeedbackOptions";
import Stats from "./FeedStatistics";
import React, { Component } from "react";
import { Section } from "./App.styled";
import PropTypes from 'prop-types';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }  

  onLeaveFeedbackGood = (e) => {
    this.setState((prevState) => ({ good: prevState.good += 1 }))
  }
  onLeaveFeedbackNeutral = (e) => {
    this.setState((prevState) => ({ neutral: prevState.neutral += 1 }))
  }
  onLeaveFeedbackBad = (e) => {
    this.setState((prevState) => ({ bad: prevState.bad += 1 }))
  }
          
  render() {
    const { good, neutral, bad } = this.state;
      return (
        <>
          <Section title="Please leave feedback">
            <h1>Please leave feedback</h1>
            <FeedbackOptions 
              options={this.state}
              onLeaveFeedbackGood={this.onLeaveFeedbackGood}
              onLeaveFeedbackNeutral={this.onLeaveFeedbackNeutral}
              onLeaveFeedbackBad={this.onLeaveFeedbackBad}
            />
          </Section>
          <Section title="Statistics">
            <h2>Statistics</h2>
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              />
          </Section>
        </>
      );
    };
  };
  
