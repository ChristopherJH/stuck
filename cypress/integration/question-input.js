describe("Empty question input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-button").click();
  });

  it("Gives an error", () => {
    cy.contains("Cannot be empty").should("exist");
  });
  it("Doesn't display next section", () => {
    cy.get(".add-options").should("not.exist");
  });
  it("Doesn't change page title", () => {
    cy.get(".header-title").contains("Stuck").should("exist");
  });
  it("Doesn't display start over button", () => {
    cy.get(".begin-button").should("not.exist");
  });
});

describe("Valid question input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".submit-question-input").type("What should I have for lunch?");
    cy.get(".submit-question-button").click();
  });
  it("Displays next section", () => {
    cy.get(".add-options").should("exist");
  });
  it("Doesn't display an error", () => {
    cy.contains("Cannot be empty").should("not.exist");
  });
  it("Changes page title", () => {
    cy.get(".header-title")
      .contains("What should I have for lunch?")
      .should("exist");
  });
  it("Displays start over button", () => {
    cy.get(".begin-button").should("exist");
  });
});
