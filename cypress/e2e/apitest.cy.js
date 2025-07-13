//use request module for apis.

describe("first api testing", function(){

    it("number one", function(){

        //use request and give the url.
        //use then for assertions.

        cy.request("https://ineuron-courses.vercel.app/login")
        .then(function(msg){
            cy.log(msg.status) //get the status code.
            cy.log(msg.statusText)//get the status text/
            cy.log(msg.duration) //gets time taken to run test in ms
            cy.log(msg.body) //gives response body
            cy.log(msg) //gives Object{8} as output. gives json object.
        })
    })
})