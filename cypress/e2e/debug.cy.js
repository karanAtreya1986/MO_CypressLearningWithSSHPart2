//debug command.
//it will run normally if the dom is not opened.
//open the dom and then run and then we can debug line by line.
//to view changes keep console tab opened.

describe("keyboard actions", function(){
    it("try keyboard1", function(){


        //visit website -
        cy.visit("https://ineuron-courses.vercel.app/login")

        //get all the links on the page and then debug.
        cy.get("a").debug();

        //login
        cy.get("#email1").type("karan@test.com")

        //type password and hit enter key.
        cy.get("#password1").type("ineuron {enter}")
    })
})