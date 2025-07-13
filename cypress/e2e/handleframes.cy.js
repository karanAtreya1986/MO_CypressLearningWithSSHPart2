//
//get into the frame first.
//using its for multiple web elements.
//get the frame area then use wrap to make it usable in cypress.
//then use cypress commands.

describe("handle frames without cypress",function(){
    it("handle frame", function(){
        
        //visit url
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get("iframe")
        // .its("0.contentDocument.body") //go till the tag where the frame is present OR
        .its("0.contentDocument")
        .its("body")
        .then(function(body){
            cy.wrap(body).clear().type("cypress")
        })
    })




    it.only("handle frame", function(){
        
        //visit url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("iframe")
        // .its("0.contentDocument.body") //go till the tag where the frame is present OR
        .its("0.contentDocument")
        .its("body")
        .then(function(body){

            //You're invoking cy.wrap() immediately, which causes Cypress to pass undefined to 
            // .then() rather than passing a function. Cypress expects a function in 
            // .then() — not the result of a function call.
            cy.wrap(body).
            find(".theme-btn.register-btn")
            .click({force:true})
        })


    })
})