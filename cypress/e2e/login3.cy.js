//
describe('login test', () => {

    it('test valid login', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
       //we are ensuring that what we are typing is correctly entered.
        cy.xpath("//input[@id='username']").type("student").should("have.value","student" )

        cy.xpath("//input[@id='password']").type("Password123")

        cy.xpath("//button[@id='submit']").should('be.enabled').click()

        //click logout
        cy.get('.wp-block-button__link').click();

        //check if login text is visible
        cy.get('h2').should("be.visible")
      
    });
});