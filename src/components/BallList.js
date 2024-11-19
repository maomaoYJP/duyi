import React from "react";
import Ball from "./Ball";

export default class BallList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: [],
    };
    setInterval(() => {
      const ball = {
        left: Math.random() * 100,
        top: Math.random() * 100,
        xSpeed: Math.random() * 100,
        ySpeed: Math.random() * 100,
      };
      this.setState({
        balls: [...this.state.balls, ball],
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.balls.map((item) => (
          <Ball {...item}></Ball>
        ))}
      </div>
    );
  }
}
