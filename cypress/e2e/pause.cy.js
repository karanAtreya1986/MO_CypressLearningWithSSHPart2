//pause command
//stops and then we need to run like debugger.

describe("keyboard actions", function(){
    it("try keyboard1", function(){


        //visit website -
        cy.visit("https://ineuron-courses.vercel.app/login")

        //login
        cy.get("#email1").type("karan@test.com")

        cy.pause();

        //type password and hit enter key.
        cy.get("#password1").type("ineuron {enter}")
    })
})