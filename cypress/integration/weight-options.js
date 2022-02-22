describe("Weight options renders", () => {
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
  it("List renders", () => {
    cy.get(".options-weights-list").should("exist");
  });
});
describe("Weight options functions correctly", () => {
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
  it("Two attributes are shown", () => {
    cy.get(".options-weights-list > :nth-child(1)")
      .contains("Affordability")
      .should("exist");
    cy.get(".options-weights-list > :nth-child(1)")
      .contains("Tastiness")
      .should("exist");
  });
  it("Adding an option adds another child to the list", () => {
    cy.get(".add-option-input").type("Noodles");
    cy.get(".add-option-button").click();
    cy.get(".options-weights-list > :nth-child(3)").should("exist");
  });
  it("Adding an attribute adds another rating", () => {
    cy.get(".add-attribute-input").type("Healthiness");
    cy.get(".add-attribute-button").click();
    cy.get(".options-weights-list > :nth-child(1) > :nth-child(4)").should(
      "exist"
    );
  });
  it("Removing an option removes a child from the list", () => {
    cy.get(".add-option-input").type("Noodles");
    cy.get(".add-option-button").click();
    cy.get(".options-weights-list > :nth-child(3)").should("exist");
    cy.get("#choice-Noodles").click();
    cy.get(".options-weights-list > :nth-child(3)").should("not.exist");
  });
  it("Removing an attribute removes a rating", () => {
    cy.get(".add-attribute-input").type("Healthiness");
    cy.get(".add-attribute-button").click();
    cy.get(".options-weights-list > :nth-child(1) > :nth-child(4)").should(
      "exist"
    );
    cy.get("#choice-Healthiness").click();
    cy.get(".options-weights-list > :nth-child(1) > :nth-child(4)").should(
      "not.exist"
    );
  });
});
