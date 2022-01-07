import React, { Component } from "react";
import GreetingLottie from "../../components/DisplayLottie";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <GreetingLottie animationPath="/lottie/webdev.json" />
      </>
    );
  }
}
