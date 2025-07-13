
//call user defined function from command.js.

///<reference types="cypress-iframe" />

    it.only("handle frame using cypress plugin", function(){
        
        //visit url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.switchtoframe("iframe").
            find(".theme-btn.register-btn")
            .click({force:true})
        })