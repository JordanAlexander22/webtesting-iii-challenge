import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);
let wrapper;
let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};
let Open = () => {
  return wrapper.queryByText("Open");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
it("renders without crashing", () => {
  wrapper = rtl.render(<Display />);
  expect(wrapper.container).toMatchSnapshot();
});
it("renders elements properly", () => {
  wrapper = rtl.render(<Display closed={false} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Open()).toHaveClass("led", "green-led");
});
it("renders elements properly, true", () => {
  wrapper = rtl.render(<Display closed={true} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Closed()).toHaveClass("led", "red-led");
});
it("renders elements properly, closed and locked", () => {
  wrapper = rtl.render(<Display closed={true} locked={true} />);
  expect(Unlocked()).not.toBeInTheDocument();
  expect(Locked()).toBeInTheDocument();
  expect(Locked()).toBeVisible();
  expect(Locked()).toHaveClass("led", "red-led");
  expect(Closed()).toHaveClass("led", "red-led");
});