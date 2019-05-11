import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  return shallow(<App />);
};

test("renders without crashing", () => {});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {
  const wrapper = setup();
  let initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking button increment counter display", () => {
  let counter = 7;
  const wrapper = setup();
  wrapper.setState({ counter });
  let button = wrapper.find(`[data-test="btn"]`);
  button.simulate("click");
  wrapper.update();
  let display = wrapper.find(`[data-test="yo"]`).text();
  expect(display).toContain(counter + 1);
});
