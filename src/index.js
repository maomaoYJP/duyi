import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";

function getData() {
  const stuList = [];
  for (let index = 0; index < 10; index++) {
    const stu = {};
    stu.id = index;
    stu.name = "mao" + index;
    stu.age = index;
    stuList.push(stu);
  }
  return stuList;
}

function render() {
  const data = getData();
  ReactDOM.render(
    <StudentList stu={data}></StudentList>,
    document.getElementById("root")
  );
}

render();
