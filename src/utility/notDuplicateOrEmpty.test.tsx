import { notDuplicateOrEmpty } from "./notDuplicateOrEmpty";
import { testInputState } from "./testInputState";

test("Adding the option Pizza returns false as it is already an option", () => {
  expect(notDuplicateOrEmpty(testInputState, "Pizza", true)).toStrictEqual(
    false
  );
});

test("Adding an option with an empty string returns false", () => {
  expect(notDuplicateOrEmpty(testInputState, "", true)).toStrictEqual(false);
});

test("Adding a valid option returns true", () => {
  expect(notDuplicateOrEmpty(testInputState, "Curry", true)).toStrictEqual(
    true
  );
});

test("Adding the attribute Tastiness returns false as it is already an attribute", () => {
  expect(notDuplicateOrEmpty(testInputState, "Tastiness", false)).toStrictEqual(
    false
  );
});

test("Adding an attribute with an empty string returns false", () => {
  expect(notDuplicateOrEmpty(testInputState, "", false)).toStrictEqual(false);
});

test("Adding a valid attribute returns true", () => {
  expect(
    notDuplicateOrEmpty(testInputState, "Affordability", false)
  ).toStrictEqual(true);
});
