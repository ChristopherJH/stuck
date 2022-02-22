describe("Display winner renders", () => {
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
    cy.get(".reveal-winner-button").click();
  });
  it("Initial question present", () => {
    cy.get(".winner-details")
      .contains("What should I have for lunch?")
      .should("exist");
  });
  it("Initial winner is a tie", () => {
    cy.get(".winner-name").contains("Pizza or Salad").should("exist");
  });
});

describe("Rating changes winner accordingly", () => {
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
    cy.get(".reveal-winner-button").click();
  });
  it("Increasing tastiness on Pizza changes winner", () => {
    cy.get('[for="mui-36"]').click();
    cy.get(".winner-name").contains("🏆 Pizza 🏆").should("exist");
  });
  it("Increasing tastiness on Pizza changes winner and next best option is salad", () => {
    cy.get('[for="mui-36"]').click();
    cy.get(".winner-name").contains("🏆 Pizza 🏆").should("exist");
    cy.get(".winner-details > .MuiButton-root").click();
    cy.get(".second-place").contains("🥈 Salad").should("exist");
  });
  it("Increasing tastiness on Salad changes winner and next best option is pizza", () => {
    cy.get('[for="mui-56"]').click();
    cy.get(".winner-name").contains("🏆 Salad 🏆").should("exist");
    cy.get(".winner-details > .MuiButton-root").click();
    cy.get(".second-place").contains("🥈 Pizza").should("exist");
  });
});
