describe("Keypad", () => {
  it("Should change expression", () => {
    cy.visit('/');
    cy.get("[data-cypress=4]").click();
    cy.get('div').contains("+").click();
    cy.get("[data-cypress=5]").click();
    cy.get("[data-cypress=output]").should("contain","4+5");
  });
});
