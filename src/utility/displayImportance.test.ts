import { displayImportance } from "./displayImportance";

test("A value of 0 returns not at all important", () => {
  expect(displayImportance(0)).toEqual("Not at all important");
});

test("A value of 1 returns Barely important", () => {
  expect(displayImportance(1)).toEqual("Barely important");
});

test("A value of 2 returns Not very important", () => {
  expect(displayImportance(2)).toEqual("Not very important");
});

test("A value of 5 returns Extremely important", () => {
  expect(displayImportance(5)).toEqual("Extremely important");
});

test("A value of 6 returns Invalid value", () => {
  expect(displayImportance(6)).toEqual("Invalid value");
});
