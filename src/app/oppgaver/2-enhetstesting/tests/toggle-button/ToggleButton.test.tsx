/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToggleButton from "./ToggleButton";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ToggleButton", () => {
  /* Task 1
   *
   * Use the findByRole function to look up the ToggleButton component by the role, and check that it exists.
   */
  it("renders correctly", async () => {
    const { findByRole } = render(<ToggleButton text="Toggle Button" />);

    throw new Error("Task 1 not implemented");
  });

  /* Task 2
   *
   * Check that the second ToggleButton exists.
   * Hint: Use the accessible name to separate the two buttons.
   */
  it("has accessible name matching the visible text", async () => {
    const { findByRole } = render(
      <>
        <ToggleButton text="Toggle 1" />
        <ToggleButton text="Toggle 2" />
      </>
    );

    throw new Error("Task 2 not implemented");
  });

  /* Task 3
   *
   * Check that both ToggleButtons exist and are unpressed.
   * Click "Toggle 1" and check that it gets the attribute "aria-pressed" set to "true" (string).
   * Check that "Toggle 2" still has "aria-pressed" set as "false".
   */
  it("correctly sets [pressed] state", async () => {
    const { findByRole } = render(
      <>
        <ToggleButton text="Toggle 1" />
        <ToggleButton text="Toggle 2" />
      </>
    );

    throw new Error("Task 3 not implemented");
  });
});
