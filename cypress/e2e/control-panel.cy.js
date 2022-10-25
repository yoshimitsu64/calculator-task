describe("History", () => {
    beforeEach(() => {
        cy.visit("/");
      });
    
      it("Should delete expression,result,history", () => {
        cy.get("[data-cypress=9]").click();
        cy.get("div").contains("+").click();
        cy.get("[data-cypress=1]").click();
        cy.get("div").contains("=").click();
        cy.get("button").contains("Clean all").click();
        cy.get("[data-cypress=output]").should("contain", "0");
        cy.get("[data-cypress=historyList]").find("div").should("have.length", 0);
      });
})