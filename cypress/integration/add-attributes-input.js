describe("Add attributes renders correctly", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
  });

  it("Input renders", () => {
    cy.get(".add-attribute-input").should("exist");
  });
  it("Input helper renders", () => {
    cy.get(".add-attributes-helper-message").should("exist");
  });
});

describe("Empty attribute input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
    cy.get(".add-attribute-button").click();
  });

  it("Gives an error", () => {
    cy.contains("Invalid option").should("exist");
  });
  it("Doesn't add attribute to list", () => {
    cy.get("#choice-").should("not.exist");
  });
});

describe("Valid attribute input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
    cy.get(".add-attribute-input").type("Tastiness");
    cy.get(".add-attribute-button").click();
  });

  it("Doesn't give an error", () => {
    cy.contains("Invalid option").should("not.exist");
  });
  it("Adds attribute to list", () => {
    cy.get("#choice-Tastiness").should("exist");
  });
  it("Displays attribute in list", () => {
    cy.get("#choice-Tastiness").contains("1. Tastiness").should("exist");
  });
});

describe("2 valid attributes inputted", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
    cy.get(".add-attribute-input").type("Tastiness");
    cy.get(".add-attribute-button").click();
    cy.get(".add-attribute-input").type("Affordability");
    cy.get(".add-attribute-button").click();
  });

  it("Removes helper message", () => {
    cy.get(".add-attributes-helper-message").should("not.exist");
  });
  it("Shows next sections", () => {
    cy.get(".attributes-weights").should("exist");
    cy.get(".weight-options").should("exist");
  });
});

describe("Deleting attributes", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
    cy.get(".add-option-input").type("Pizza");
    cy.get(".add-option-button").click();
    cy.get(".add-option-input").type("Salad");
    cy.get(".add-option-button").click();
    cy.get(".add-attribute-input").type("Tastiness");
    cy.get(".add-attribute-button").click();
    cy.get(".add-attribute-input").type("Affordability");
    cy.get(".add-attribute-button").click();
    cy.get("#choice-Tastiness").click();
  });

  it("Removes attribute from list", () => {
    cy.get("#choice-Tastiness").should("not.exist");
    cy.get("#choice-Affordability")
      .contains("2. Affordability")
      .should("not.exist");
    cy.get("#choice-Affordability")
      .contains("1. Affordability")
      .should("exist");
  });
  it("Shows helper message", () => {
    cy.get(".add-attributes-helper-message").should("exist");
  });
  it("Hides next section", () => {
    cy.get(".attributes-weights").should("not.exist");
  });
});
