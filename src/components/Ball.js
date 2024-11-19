import React, { Component } from "react";

export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xSpeed: props.xSpeed || 0,
      ySpeed: props.ySpeed || 0,
      left: props.left || 0,
      top: props.top || 0,
    };
    const duration = 16;
    this.timer = setInterval(() => {
      let { left, top, xSpeed, ySpeed } = this.state;
      const xDis = xSpeed * (duration / 1000);
      const yDis = ySpeed * (duration / 1000);
      let newLeft = xDis + left;
      let newTop = yDis + top;
      if (newLeft <= 0) {
        newLeft = 0;
        xSpeed = -xSpeed;
      }
      if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        xSpeed = -xSpeed;
      }
      if (newTop <= 0) {
        newTop = 0;
        ySpeed = -ySpeed;
      }
      if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        ySpeed = -ySpeed;
      }
      this.setState({
        left: newLeft,
        top: newTop,
        xSpeed,
        ySpeed,
      });
    }, duration);
  }
  render() {
    return (
      <div
        style={{
          height: 100,
          width: 100,
          borderRadius: "50%",
          position: "fixed",
          backgroundColor: "red",
          left: this.state.left,
          top: this.state.top,
        }}
      ></div>
    );
  }
}
