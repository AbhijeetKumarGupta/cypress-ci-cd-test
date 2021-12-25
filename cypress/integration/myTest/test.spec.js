/// <reference types="cypress" />
describe("Dummy Test", () => {
  it("Test Home", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Edit src/App.js and save to reload.").should("exist");
    cy.contains("Learn React").should("exist");
  });
});
