describe("Add options renders correctly", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
  });

  it("Input renders", () => {
    cy.get(".add-option-input").should("exist");
  });
  it("Input helper renders", () => {
    cy.get(".add-options-helper-message").should("exist");
  });
});

describe("Empty option input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-button").click();
  });

  it("Gives an error", () => {
    cy.contains("Invalid option").should("exist");
  });
  it("Doesn't add option to list", () => {
    cy.get("#choice-").should("not.exist");
  });
});

describe("Valid option input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
  });

  it("Doesn't give an error", () => {
    cy.contains("Invalid option").should("not.exist");
  });
  it("Adds option to list", () => {
    cy.get("#choice-Pizza").should("exist");
  });
  it("Displays option in list", () => {
    cy.get("#choice-Pizza").contains("1. Pizza").should("exist");
  });
});

describe("2 valid options inputted", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
  });

  it("Removes helper message", () => {
    cy.get(".add-options-helper-message").should("not.exist");
  });
  it("Shows next section", () => {
    cy.get(".add-attributes").should("exist");
  });
});

describe("Deleting options", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
    cy.get("#choice-Pizza").click();
  });

  it("Removes option from list", () => {
    cy.get("#choice-Pizza").should("not.exist");
    cy.get("#choice-Salad").contains("2. Salad").should("not.exist");
    cy.get("#choice-Salad").contains("1. Salad").should("exist");
  });
  it("Shows helper message", () => {
    cy.get(".add-options-helper-message").should("exist");
  });
  it("Hides next section", () => {
    cy.get(".add-attributes").should("not.exist");
  });
});
