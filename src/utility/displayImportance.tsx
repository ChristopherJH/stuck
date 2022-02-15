export function displayImportance(value: number): string {
  if (value > 90) {
    return "Extremely important";
  } else if (value > 80) {
    return "Super important";
  } else if (value > 60) {
    return "Very important";
  } else if (value >= 50) {
    return "Pretty important";
  } else if (value > 30) {
    return "A little important";
  } else if (value > 10) {
    return "Not very important";
  } else if (value > 0) {
    return "Barely important";
  } else {
    return "Not at all important";
  }
}
