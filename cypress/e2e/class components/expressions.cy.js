describe("Expressions", () => {
    
    it("Should calculate sum", () => {
        cy.visit("/HOMECC");
        cy.get("[data-cypress=9]").click();
        cy.get("[data-cypress=4]").click();
        cy.get("[data-cypress=3]").click();
        cy.get('div').contains('+').click();
        cy.get("[data-cypress=1]").click();
        cy.get("[data-cypress=0]").click();
        cy.get("[data-cypress=0]").click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","1943")
        cy.get("[data-cypress=C]").click()

    })

    it("Should calculate difference", () => {
        cy.get("[data-cypress=8]").click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('-').click();
        cy.get("[data-cypress=1]").click();
        cy.get("[data-cypress=0]").click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","-20")
        cy.get("[data-cypress=C]").click()
    })

    it("Should calculate multiplication", () => {
        cy.get("[data-cypress=1]").click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('*').click();
        cy.get("[data-cypress=1]").click();
        cy.get("[data-cypress=0]").click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","1000");
        cy.get("[data-cypress=C]").click()
    })

    it("Should calculate division", () => {
        cy.get("[data-cypress=4]").click();
        cy.get('div').contains('/').click();
        cy.get("[data-cypress=2]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","2")
        cy.get("[data-cypress=C]").click()
    })

    it("Should calculate mod", () => {
        cy.get("[data-cypress=4]").click();
        cy.get('div').contains('%').click();
        cy.get("[data-cypress=3]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","1")
        cy.get("[data-cypress=C]").click()
    })

    it("Should display error after division by 0", () => {
        cy.get("[data-cypress=4]").click();
        cy.get('div').contains('/').click();
        cy.get("[data-cypress=0]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","Error: Division by zero")
        cy.get("[data-cypress=C]").click()
    })

    it("Should calculate decimals", () => {
        cy.get("[data-cypress=1]").click();
        cy.get('div').contains('/').click();
        cy.get('div').contains('.').click();
        cy.get("[data-cypress=5]").click();
        cy.get('div').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","2")
        cy.get("[data-cypress=C]").click()
    })

    it("Should calculate diffucult expression with scopes", () => {
        cy.get("[data-cypress=1]").click();
        cy.get('button').contains('+').click();
        cy.get("[data-cypress=2]").click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('(').click();
        cy.get("[data-cypress=3]").click();
        cy.get('button').contains('+').click();
        cy.get("[data-cypress=4]").click();
        cy.get('button').contains('/').click();
        cy.get("[data-cypress=2]").click();
        cy.get('button').contains('-').click();
        cy.get('button').contains('(').click();
        cy.get("[data-cypress=1]").click();
        cy.get('button').contains('+').click();
        cy.get("[data-cypress=2]").click();
        cy.get('button').contains(')').click();
        cy.get('button').contains(')').click();
        cy.get('button').contains('*').click();
        cy.get("[data-cypress=2]").click();
        cy.get('button').contains('+').click();
        cy.get("[data-cypress=1]").click();
        cy.get('button').contains('=').click();
        cy.get("[data-cypress=output]").should("contain","10");
    })
})