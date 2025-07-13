// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//this is fully hard coded.
Cypress.Commands.add("handleautosuggestionlists", function(){
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
    })



//lets make above code generic without hard coding.
Cypress.Commands.add("handleautosuggestionlists", function(locator, textosearch){
    //get all the option values
        //iterate values and if you get value click on it.
        //we dont have text directly in cypress.
        //we use jquery.
        //use each. we can pass all three arguments or any one.
        //same like for each. jquery, index, list.
        //wrap - converts any damn element or object or jquery element to cypress element.
        cy.xpath(locator)
        .each(function(ele){
            cy.log(ele.text()); //text comes from jquery.

            if(ele.text().includes(textosearch)){
                cy.wrap(ele).click({force:true}) //convert to cypress and then click.
            }
        })
})

//lets try to do for login
Cypress.Commands.add("login", function(username, password){
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get("#submit").should("be.enabled").click()
})

//selecting frame using our js code
//we are also returning value.
Cypress.Commands.add("switchtoframe", function(locator){
    let value= cy.get(locator)
        .its("0.contentDocument")
        .its("body")
        .then(function(body){
            cy.wrap(body)
})
return value;
})