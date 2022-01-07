import React, { Component } from "react";
import GreetingLottie from "../../components/DisplayLottie";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <GreetingLottie animationPath="/lottie/build.json" />
      </>
    );
  }
}
