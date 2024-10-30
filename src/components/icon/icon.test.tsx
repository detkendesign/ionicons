import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon } from "./icon";
import { expect, test } from "vitest";

test("renders icon with default props", () => {
  render(<Icon />);
  const iconElement = screen.getByRole("img", { hidden: true });
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveTextContent("icon");
});
