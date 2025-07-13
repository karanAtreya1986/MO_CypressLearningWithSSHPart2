//
describe('login test', () => {

    //use the utility function.
    it('test valid login', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        
       cy.login("student","Password123");
      
    });
});