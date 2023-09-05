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
    const button = await findByRole("button");
    expect(button).toBeInTheDocument();
  })

  it("works atomically, allowing more than one to be used simultaneously", async () => {
    const { findByRole } = render(
    <>
      <ToggleButton text="Toggle 1" />
      <ToggleButton text="Toggle 2" />
    </>);

    const toggle1 = await findByRole("button", {
      name: "Toggle 1"
    });
    const toggle2 = await findByRole("button", {
      name: "Toggle 2"
    });
    fireEvent.click(toggle1);
    expect(toggle1.getAttribute("aria-pressed")).toBe("true");
    expect(toggle2.getAttribute("aria-pressed")).toBe("false");
  });

  it("correctly sets [pressed] state", async () => {
    const { findByRole } = render(
    <>
      <ToggleButton text="Toggle 1" />
      <ToggleButton text="Toggle 2" />
    </>);


    const toggleButtonBeforePressingIt = await findByRole("button", {
      name: "Toggle 1",
      pressed: false,
    });
    fireEvent.click(toggleButtonBeforePressingIt);
    const toggleButtonAfterPressingIt = await findByRole("button", {
      name: "Toggle 1",
      pressed: true,
    });
    expect(toggleButtonAfterPressingIt).toBeInTheDocument();
  });

  it("is accessible", async () => {
    const { container, findByRole } = render(
      <>
        <ToggleButton text="Toggle 1" />
        <ToggleButton text="Toggle 2" />
      </>);
  
      expect(await axe(container)).toHaveNoViolations();
  
      const toggleButtonBeforePressingIt = await findByRole("button", {
        name: "Toggle 1",
        pressed: false,
      });
      fireEvent.click(toggleButtonBeforePressingIt);
      expect(await axe(container)).toHaveNoViolations();

      const toggleButtonAfterPressingIt = await findByRole("button", {
        name: "Toggle 1",
        pressed: true,
      });
      expect(toggleButtonAfterPressingIt).toBeInTheDocument()
  
      expect(await axe(container)).toHaveNoViolations();
  })
});
