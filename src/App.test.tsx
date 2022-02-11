import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders title element", () => {
  render(<App />);
  const titleElement = screen.getByText("❓ Stuck");
  expect(titleElement).toBeInTheDocument();
});

test("Renders question input element", () => {
  render(<App />);
  const questionInputElement = screen.getByText("What are you stuck on?");
  expect(questionInputElement).toBeInTheDocument();
});
