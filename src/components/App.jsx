import FeedButtons from "./FeedButtons/";
import Stats from "./FeedStatistics";
import React, { Component } from "react";


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
          <FeedButtons/>
          <Stats />
        </>
      );
        
    };
  };
  
