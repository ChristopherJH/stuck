export function displayImportance(value: number): string {
  if (value === 5) {
    return "Extremely important";
  } else if (value > 4) {
    return "Very important";
  } else if (value > 3) {
    return "Pretty important";
  } else if (value > 2) {
    return "A little important";
  } else if (value > 1) {
    return "Not very important";
  } else if (value > 0) {
    return "Barely important";
  } else {
    return "Not at all important";
  }
}
