import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Icon } from "./icon.js";
import { ICON_SIZE } from "./constants.js";
import { describe, it, expect } from "vitest";
import React from "react";

const checkSizeDimension = (icon: SVGSVGElement, size: number) => {
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute("width", size.toString());
  expect(icon).toHaveAttribute("height", size.toString());
};

describe("Icon Component", () => {
  const validIcon = "accessibility";

  it("renders without crashing when a valid icon name is provided", () => {
    render(<Icon name={validIcon} data-testid={validIcon} />);
    expect(screen.getByTestId(validIcon)).toBeInTheDocument();
  });

  it("throws an error if an invalid icon name is provided", () => {
    const invalidIcon = "invalidIcon";
    // @ts-expect-error: For testing purposes.
    expect(() => render(<Icon name={invalidIcon} />)).toThrowError();
  });

  it("forwards the ref to the SVG element", () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Icon name={validIcon} ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it("passes additional props to the SVG component", () => {
    render(<Icon name={validIcon} data-testid="custom-icon" />);
    const icon = screen.getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders the correct size when using fixed sizes", () => {
    const size = "small";
    const { container } = render(<Icon name={validIcon} size={size} />);
    const icon = container.querySelector("svg")!;
    checkSizeDimension(icon, ICON_SIZE[size]);
  });

  it("renders the correct size when passed a number", () => {
    const size = 24;
    const { container } = render(<Icon name={validIcon} size={size} />);
    const icon = container.querySelector("svg")!;
    checkSizeDimension(icon, size);
  });
});
