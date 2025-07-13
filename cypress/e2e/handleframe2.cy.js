
//we use the iframe installer given by cypress.
//load the frame using frameloaded method.
//for auto suggestion on frames use below line.

///<reference types="cypress-iframe" />

    it.only("handle frame using cypress plugin", function(){
        
        //visit url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //first use the frameloaded method and pass the iframe.
        //you can use any selector or attribute to get it.
        //then say iframe()
        //then use find method and pass selector of element inside iframe.
        //then perform operation.
        cy.frameLoaded("#courses-iframe")
        .iframe().find(".theme-btn.register-btn")
        .click()
        })