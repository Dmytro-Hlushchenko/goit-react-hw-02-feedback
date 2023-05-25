import FeedButtons from "./FeedButtons/";
import Stats from "./FeedStatistics";
import React, { Component } from "react";
import PropTypes from 'prop-types';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
        
  render() {
      return (
        <>
          <h1>Please leave feedback</h1>
          <FeedButtons />
          <h2>Statistics</h2>
          <Stats good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad }
          />
        </>
      );
    };
  };
  
