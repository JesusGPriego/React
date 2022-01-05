import React from "react";
import ReactDOM from "react-dom";
import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import "./index.css";
// console.log(saludo);

const divRoot = document.querySelector("#root");
// ReactDOM.render(<FirstApp greeting="Mahara" />, divRoot);
ReactDOM.render(<CounterApp value={33} />, divRoot);
