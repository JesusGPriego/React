import { shallow } from "enzyme";
import FirstApp from "../FirstApp";
import React from "react";
import "@testing-library/jest-dom";
describe("Testing <FirstApp />", () => {
  //   test("should return 'Mahara'", () => {
  //     const greeting = "Mahara";
  //     const { getByText } = render(<FirstApp greeting="Mahara" />);
  //     expect(getByText(greeting)).toBeInTheDocument();
  //   });

  test("should show FirstApp correctly", () => {
    const greeting = "Mahara";
    const wrapper = shallow(<FirstApp greeting={greeting} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should show props subtitle", () => {
    const greeting = "Mahara";
    const subtitle = "I'm a subtitle";
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );
    const subtitleText = wrapper.find("p").text();
    expect(subtitleText).toBe(subtitle);
  });
});
