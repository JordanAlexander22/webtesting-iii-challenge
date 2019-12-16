// Test away

// step 1 bring all deps
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dash from "./Dashboard";
// step 2 set up clean up
afterEach(rtl.cleanup);
//step 3 set up boring operation in before eachwrapper
let wrapper;
let Unlocked = () => wrapper.queryByText("Unlocked");
let Open = () => wrapper.queryByText("Open");
let LockGate = () => {
  return wrapper.queryByText("Lock Gate");
};
let CloseGate = () => {
  return wrapper.queryByText("Close Gate");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
let OpenGate = () => {
  return wrapper.queryByText("Open Gate");
};
let UnlockGate = () => {
  return wrapper.queryByText("Unlock Gate");
};
//the other two
beforeEach(() => {
  wrapper = rtl.render(<Dash />);
});
//make a trivial test
it("renders without crashing", () => {
  expect(wrapper.container).toMatchSnapshot();
});
it('renders a "Unlocked" text node', () => {
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
});
it('renders a "Open" text node', () => {
  expect(Open()).toBeInTheDocument();
  expect(Open()).toBeVisible();
});
it('renders a "LockGate" text node', () => {
  expect(LockGate()).toBeInTheDocument();
  expect(LockGate()).toBeVisible();
});
it('renders a "CloseGate" text node', () => {
  expect(CloseGate()).toBeInTheDocument();
  expect(CloseGate()).toBeVisible();
});
describe("Dashboard component, when we CLOSE the gate", () => {
  //programmatically click on the CLOSE button
  // and we re test everything
  it("matches snapshot after closing the gate", () => {
    rtl.fireEvent.click(CloseGate());
    expect(wrapper.container).toMatchSnapshot();
  });
  it("clicking close makes close button dissappear", () => {
    expect(CloseGate()).toBeVisible();
    rtl.fireEvent.click(CloseGate());
    expect(CloseGate()).toBe(null);
  });
  it("clicking close makes the OPEN change to be CLOSED", () => {});
});
describe("Dashboard component, when we CLOSE and LOCK the gate", () => {
  it("mathces snapshot afyer closing and locking the gate", () => {
    rtl.fireEvent.click(CloseGate());
    rtl.fireEvent.click(LockGate());
  });
});