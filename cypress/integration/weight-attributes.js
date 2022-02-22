describe("Weight attributes renders", () => {
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
    cy.get(".attributes-weights-list").should("exist");
    cy.get(".attributes-weights-list").contains("Tastiness").should("exist");
    cy.get(".attributes-weights-list")
      .contains("Affordability")
      .should("exist");
    cy.get("#weight-attribute-Tastiness")
      .contains("A little important")
      .should("exist");
    cy.get("#weight-attribute-Affordability")
      .contains("A little important")
      .should("exist");
  });
});

describe("Rating attributes works", () => {
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

  it("Rating tastiness changes weighting", () => {
    cy.get('[for="mui-16"]').click();
    cy.get(".attributes-weights-list")
      .contains("Pretty important")
      .should("exist");
    cy.get('[for="mui-28"]').click();
    cy.get(".attributes-weights-list")
      .contains("Extremely important")
      .should("exist");
  });
});
