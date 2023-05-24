describe("Cypress tests", () => {
    it("should load the app", () => {
        cy.visit("http://localhost:3000/");
    })
})