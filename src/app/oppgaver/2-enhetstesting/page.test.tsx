/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("My first test", () => {
  it("checks if the TestComponent is accessible", async () => {
    const { container } = render(<TestComponent />);

    const results = await axe(container);
    //console.log("Results", results);
    expect(results).toHaveNoViolations();

    await screen.findByRole("button");

    const button = await screen.findByRole("button", {
      name: "Toggle button",
      pressed: false,
    });
    fireEvent.click(button);
    await screen.findByRole("button", {
      name: "Toggle button",
      pressed: true,
    });

    expect(await axe(container)).toHaveNoViolations();
  });
});
