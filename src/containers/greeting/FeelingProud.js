import React, { Component } from "react";
import GreetingLottie from "../../components/DisplayLottie";
class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <GreetingLottie animationPath="/lottie/coding.json" />
      </>
    );
  }
}

export default FeelingProud;
