//
describe('login test', () => {

    it('test valid login', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
       //using xpath
        cy.xpath("//input[@id='username']").type("student")

        cy.xpath("//input[@id='password']").type("Password123")
      
    });
});