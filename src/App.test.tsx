import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders title element", () => {
  render(<App />);
  const titleElement = screen.getByText("❓ Welcome to DeciderFlow!");
  expect(titleElement).toBeInTheDocument();
});

test("Renders options selector element", () => {
  render(<App />);
  const optionsElement = screen.getByText("What are the options?");
  expect(optionsElement).toBeInTheDocument();
});
