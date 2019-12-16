  import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "../dashboard/Dashboard.js";

// Test away!

afterEach(() => {
  cleanup();
  console.log(document.body.outerHTML);
});

describe("<Controls />", () => {
  it("should toggle Lock and Unlock Gates", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeGate);
    fireEvent.click(lockButton);
    getByText(/unlock gate/i);
    getByText(/open gate/i);

    const unlockButton = getByText(/unlock gate/i);

    fireEvent.click(unlockButton);
    getByText(/lock gate/i);
  });

  it("should toggle Open and Closed Gates", () => {
    const { getByText } = render(<Dashboard />);

    const closeGate = getByText(/close gate/i);

    fireEvent.click(closeGate);
    getByText(/lock gate/i);
    getByText(/open gate/i);

    const openGate = getByText(/open gate/i);

    fireEvent.click(openGate);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});