//

//right click option.   
describe("right click option", function(){
    it("right click", function(){
        
        //visit url
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //right click on this button
        cy.contains("right click me").rightclick()

        //click on the copy link
        cy.xpath("//span[normalize-space()='Copy']").click();

        //then we get alert
        //validate the message inside alert.
        cy.on("window:alert", function(msg){
            expect(msg).to.equal("clicked: copy");
            expect(msg).to.be.equal("clicked: copy");
        })
    })
})