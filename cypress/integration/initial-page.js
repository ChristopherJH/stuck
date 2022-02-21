describe("Page loads components correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("app renders correctly", () => {
    cy.get(".App").should("exist");
  });
  it("question input renders correctly", () => {
    cy.get(".submit-question-input").should("exist");
  });
  it("question submit button renders correctly", () => {
    cy.get(".submit-question-button").should("exist");
  });
  it("add options component shouldn't render yet", () => {
    cy.get(".add-options").should("not.exist");
  });
});
