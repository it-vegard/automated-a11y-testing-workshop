describe("Cypress tests", () => {
    it("should load the app", () => {
        cy.visit("http://localhost:3000/");
        cy.injectAxe();
        cy.configureAxe({
            rules: [
                { id: "svg-img-alt", enabled: false },
                { id: "image-alt", enabled: false }
            ]
        })
        cy.checkA11y(null, {
            rules: {
                'svg-img-alt': { enabled: false }
            }
        });

        cy.contains("Start her").click();

        cy.url().should('include', '/oppgaver/1-linting')
        
        cy.checkA11y(null, {
            rules: {
                'image-alt': { enabled: false }
            }
        });
    })
})