describe("Display", () => {
    it('should have a zero', () => {
        cy.visit('/');

        cy.get("[data-cypress=output]").should("contain","0");
    })
})