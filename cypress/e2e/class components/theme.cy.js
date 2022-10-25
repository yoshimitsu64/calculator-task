describe("Theme", () => {
  it("Should change theme to black", () => {
    cy.visit("/Settings");
    cy.get(".toggle-switch").click();
    cy.get("[data-cypress=app]").should("have.css", 'background-color', 'rgb(0, 0, 0)');
    cy.get(".toggle-switch").click();
    cy.get("[data-cypress=app]").should("have.css", 'background-color', 'rgb(255, 255, 255)');
  });
});
