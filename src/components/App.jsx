// Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки.
// Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків.
// Для цього створи допоміжні методи countTotalFeedback() і countPositiveFeedbackPercentage(), які підраховують ці значення,
// ґрунтуючись на даних у стані(обчислювані дані).

import FeedbackOptions from "./FeedbackOptions";
import Stats from "./FeedStatistics";
import React, { Component } from "react";
import { Section } from "./App.styled";
// import PropTypes from 'prop-types';

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

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const sum = stateValues.reduce((acc, value) => acc + value, 0); 
    return sum;
  };

  countPositiveFeedbackPercentage() {
      return `${Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    )}%`;
  }
          
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
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
              total={totalFeedback}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
              />
          </Section>
        </>
      );
    };
  };
  
