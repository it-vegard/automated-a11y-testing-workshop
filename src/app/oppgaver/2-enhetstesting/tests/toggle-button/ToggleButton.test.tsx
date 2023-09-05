/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToggleButton from "./ToggleButton";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ToggleButton", () => {
  it("renders correctly", async () => {
    const { findByRole } = render(<ToggleButton text="Toggle Button" />);

    /* Task 1 */
  })

  it("works atomically, allowing more than one to be used simultaneously", async () => {
    const { findByRole } = render(
    <>
      <ToggleButton text="Toggle 1" />
      <ToggleButton text="Toggle 2" />
    </>);

   /* Task 2 */
  });

  it("correctly sets [pressed] state", async () => {
    const { findByRole } = render(
    <>
      <ToggleButton text="Toggle 1" />
      <ToggleButton text="Toggle 2" />
    </>);


    /* Task 3 */
  });

  it("is accessible", async () => {
    const { container, findByRole } = render(
      <>
        <ToggleButton text="Toggle 1" />
        <ToggleButton text="Toggle 2" />
      </>);
  
      /* Task 4 */
  })
});
