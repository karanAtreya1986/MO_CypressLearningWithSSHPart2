//
describe('login test', () => {

    it('test valid login', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
        //login in
        //xpath requires plugin
        cy.get("#username").type("student")
        cy.get("#password").type("Password123")
        cy.get('#submit').click()

        //check if log out button is present
        cy.get('.wp-block-button__link').should("be.visible")
    });

    //with timeout
     it.only('test valid login with timeout', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
        //login in
        //xpath requires plugin
        cy.get("#username").type("student")
        cy.get("#password").type("Password123", {timeout:100000})
        cy.get('#submit').click()

        //check if log out button is present
        cy.get('.wp-block-button__link').should("be.visible")
    });
    
});