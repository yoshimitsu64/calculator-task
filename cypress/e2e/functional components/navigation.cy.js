describe("Navigation", () => {
  it("Should reddirect to Home(CC) page", () => {
    cy.visit("/");
    cy.get("a").contains("Home(CC)").click();
    cy.visit("/HOMECC");
  });

  it("Should redirect to Home(FC) page", () => {
    cy.visit("/HOMECC");
    cy.get("a").contains("Home(FC)").click();
    cy.visit("/");
  });
  
});
