//
describe('auto suggest google search', () => {
    
    it('select value from google search', () => {
        
        cy.visit("https://www.google.com/")

//         cy.wait(10000);

//         // Try clicking the "Stay signed out" or close button
// cy.contains('Stay signed out').click({ force: true }).should('not.exist');

cy.wait(10000);

cy.xpath("//textarea[@id='APjFqb']").click()

        //type like robot.
        cy.xpath("//textarea[@id='APjFqb']").type("mukesh otwani", {delay:200})

        //calling the utility command.
        cy.handleautosuggestionlists()

        


    });
});