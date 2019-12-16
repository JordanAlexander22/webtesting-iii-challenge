// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
afterEach(rtl.cleanup);
describe("Controls", () => {
  it("should match snapshot", () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });
  it("provides buttons to toggle the closed and locked states", () => {
    const { getByText } = rtl.render(<Controls />);
    getByText(/Lock Gate/);
    getByText(/Close Gate/);
  });
  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText } = rtl.render(<Controls closed={true} locked={true} />);
    const openButton = getByText(/Open Gate/);
    expect(openButton.disabled).toBeTruthy();
  });
  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText } = rtl.render(
      <Controls closed={false} locked={false} />
    );
    const lockButton = getByText(/Lock Gate/);
    expect(lockButton.disabled).toBeTruthy();
  });
});