describe("Display", () => {
    it('should have a zero', () => {
        cy.visit('/HOMECC');

        cy.get("[data-cypress=output]").should("contain","0");
    })
})