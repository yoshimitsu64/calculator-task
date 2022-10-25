describe("History", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should have changable visability", () => {
    cy.visit("/");
    cy.get("div").contains("Show history").click();
    cy.get("[data-cypress=historyContainer]").should(
      "have.css",
      "display",
      "block"
    );
    cy.get("div").contains("Show history").click();
    cy.get("[data-cypress=historyContainer]").should(
      "have.css",
      "display",
      "none"
    );
  });
  it("Should have operations", () => {
    cy.get("[data-cypress=9]").click();
    cy.get("div").contains("+").click();
    cy.get("[data-cypress=1]").click();
    cy.get("div").contains("=").click();
    cy.get("[data-cypress=historyList]").find("div").should("have.length", !0);
    cy.get("[data-cypress=C]").click();

  })

  it("Should delete history list", () => {
    cy.get("[data-cypress=9]").click();
    cy.get("[data-cypress=4]").click();
    cy.get("[data-cypress=3]").click();
    cy.get("div").contains("+").click();
    cy.get("[data-cypress=1]").click();
    cy.get("[data-cypress=0]").click();
    cy.get("[data-cypress=0]").click();
    cy.get("[data-cypress=0]").click();
    cy.get("div").contains("=").click();
    cy.get("[data-cypress=C]").click();
    cy.get("button").contains("Clean history").click();
    cy.get("[data-cypress=historyList]").find("div").should("have.length", 0);
  });
});
