//
describe("test multi tabs or windows", function(){
    it("check for multi tabs or windows", function(){
        
        //visit page
        cy.visit("https://the-internet.herokuapp.com/windows")

        //first remove attribute which opens new tab and then perform click.
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click()
    })



    //switch to new tab and perform some operation on that window
     it.only("switch to new tab and perform operation", function(){
        
        //visit page
        cy.visit("https://ineuron-courses.vercel.app/login")

        //login
        cy.get("#email1").type("ineuron@ineuron.ai")
        cy.get("#password1").type("ineuron")
        cy.get("button[type='submit']").click()

        cy.contains("Manage").realHover();

        cy.wait(3000);

        cy.contains("Manage Categories").invoke("removeAttr", "target").click({force:true})

        //lets validate on new window
        cy.window().then(function(win){
            cy.contains("Add New Category").click();
            cy.stub(win, "prompt").returns("playwright")
        })

        cy.contains("playwright").should("be.visible")
    })
})