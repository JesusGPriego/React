// Required imports
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import React from "react";
import "@testing-library/jest-dom";
// tests
describe("CounterApp.js tests", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("should return counter app snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should return true when prop 'value' = 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={100} />);
    const counterValue = parseInt(wrapper.find("h2").text());
    expect(value).toBe(counterValue);
  });
  test("should increase counter in +1", () => {
    wrapper.find("button").at(0).simulate("click");
    //emulating click:
    const counterValue = parseInt(wrapper.find("h2").text());
    expect(counterValue).toBe(11);
  });
  test("should reset counter to 10:", () => {
    wrapper.find("button").at(1).simulate("click");
    //emulating click:
    const counterValue = parseInt(wrapper.find("h2").text());
    expect(counterValue).toBe(10);
  });
  test("should decrease counter in -1", () => {
    wrapper.find("button").at(2).simulate("click");
    //emulating click:
    const counterValue = parseInt(wrapper.find("h2").text());
    expect(counterValue).toBe(9);
  });
});
