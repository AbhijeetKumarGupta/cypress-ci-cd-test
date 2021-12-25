/// <reference types="cypress" />
describe("Dummy Test", () => {
  it("Test Home", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").first().should("have.text", "Hello Everyone!");
    cy.get("p")
      .first()
      .should(
        "have.text",
        "This is a test for checking the integration of React, Cypress and Github actions for CI and CD."
      );
    cy.get("button").should("have.text", "Click Me!").click();
    cy.contains("Learn React").should("exist");
  });
});
