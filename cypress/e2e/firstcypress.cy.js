//
//for getting cypress suggestions
/// <reference types="cypress" />

describe('smoke test', () => {
    it('verify title', () => {
        cy.visit("https://www.google.com")

        //assertions
        cy.title().should("contain", "Goo")
    });

    it('verify exact title', () => {
        cy.visit("https://www.google.com")

        //assertions
        cy.title().should("contain", "Google")
    });

     it('verify partial url', () => {
        cy.visit("https://www.google.com")

        //assertions
        cy.url().should("contain", "www")
    });
});