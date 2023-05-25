/**
 * @jest-environment jsdom
 */
import React from "react";
import {render, screen} from '@testing-library/react'
import TestComponent from "./TestComponent"
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("My first test", () => {
    it("checks if the TestComponent is accessible", async () => {
        const { container } = render(<TestComponent />);
        await screen.findByRole('button');
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    })
})