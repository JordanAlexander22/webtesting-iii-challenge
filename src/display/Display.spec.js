// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
afterEach(rtl.cleanup);
describe("Display", () => {
  it("should match snapshot", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    rtl.render(<Display />);
  });
  it("open and unlocked", () => {
    const { getByText } = rtl.render(<Display closed={false} locked={false} />);
    getByText(/Unlocked/);
    getByText(/Open/);
  });
  it("closed and locked", () => {
    const { getByText } = rtl.render(<Display closed={true} locked={true} />);
    getByText(/Locked/);
    getByText(/Closed/);
  });
  it("displays closed if the closed prop is true and open if otherwise", () => {
    const { getByText } = rtl.render(<Display locked={false} closed={true} />);
    getByText(/Closed/);
  });
  it("displays open if the closed prop is false and closed otherwise", () => {
    const { getByText } = rtl.render(<Display locked={false} closed={false} />);
    getByText(/Open/);
  });
  it("displays Locked if the locked prop is true and Unlocked if otherwise", () => {
    let { getByText } = rtl.render(<Display locked={true} closed={true} />);
    getByText(/Locked/);
  });
  it("displays Locked if the locked prop is true and Unlocked if otherwise", () => {
    let { getByText } = rtl.render(<Display locked={false} closed={true} />);
    getByText(/Unlocked/);
  });
  it("when locked or closed use the red-led class", () => {
    const { getByText } = rtl.render(<Display locked={true} closed={true} />);
    const closed = getByText(/Closed/);
    const locked = getByText(/Locked/);
    expect(closed.classList.contains("red-led")).toBeTruthy();
    expect(locked.classList.contains("red-led")).toBeTruthy();
  });
  it("when unlocked or open use the green-led class", () => {
    const { getByText } = rtl.render(<Display locked={false} closed={false} />);
    const unlocked = getByText(/Unlocked/);
    const open = getByText(/Open/);
    expect(unlocked.classList.contains("green-led")).toBeTruthy();
    expect(open.classList.contains("green-led")).toBeTruthy();
  });
});