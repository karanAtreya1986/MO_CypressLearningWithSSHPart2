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

        //get all the option values
        //iterate values and if you get value click on it.
        //we dont have text directly in cypress.
        //we use jquery.
        //use each. we can pass all three arguments or any one.
        //same like for each. jquery, index, list.
        //wrap - converts any damn element or object or jquery element to cypress element.
        cy.xpath("//div[@role='option']/div[1]//span")
        .each(function(ele){
            cy.log(ele.text()); //text comes from jquery.

            if(ele.text().includes("api")){
                cy.wrap(ele).click({force:true}) //convert to cypress and then click.
            }
        })

        


    });
});