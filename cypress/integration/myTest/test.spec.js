/// <reference types="cypress" />
describe("Dummy Test", () => {
  it("Test Home", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").first().should("have.text", "Hello Everyone!");
  });
});
