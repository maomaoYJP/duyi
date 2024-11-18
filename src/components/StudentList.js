import React, { Component } from "react";
import Student from "./student";

export default class StudentList extends Component {
  render() {
    const students = this.props.stu.map((item) => (
      <Student {...item}></Student>
    ));
    return <ul>{students}</ul>;
  }
}
