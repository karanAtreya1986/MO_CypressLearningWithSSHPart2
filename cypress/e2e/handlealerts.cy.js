//
describe("handle js alerts" ,function(){

    it("normal alert", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Alert").click()
        
    })

    //capture text inside normal alert.
    it("verify text inside normal alert", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.contains("Click for JS Alert").click()

        cy.on("window:alert",function(msg){
expect(msg).to.be.equal("I am a JS Alert")
        })
        
    })


//capture text inside js confirm.
//by default cypress clicks on ok button.
    it("click on js confirm", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()

        cy.on("window:confirm",function(msg){
expect(msg).to.be.equal("I am a JS Confirm")
        })
        
    })


    //capture text inside js confirm.
//click on cancel button.
    it("click on js confirm", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains("Click for JS Confirm").click()

        cy.on("window:confirm",function(msg){
expect(msg).to.be.equal("I am a JS Confirm")

    return false; //to click on cancel button inside js confirm.
        })
        

    
        cy.contains("You clicked: Cancel").should("be.visible")
    })


    //to handle prompts
     it("click on js prompts", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //this will throw error.
        //Timed out retrying after 4000ms: Expected to find content: 'You entered: cypress' but never did.
        //we are clicking outside the stub so it wont work.

        cy.contains("Click for JS Prompt").click()

        cy.window().then(function(win){

        //use stub for generating some dummy response.
        cy.stub(win, "prompt").returns("cypress")
        })

        //assert
        cy.contains("You entered: cypress").should("be.visible")
    })


    //to handle prompts inside stub
     it.only("click on js prompts inside stub", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        //this will throw error.
        //Timed out retrying after 4000ms: Expected to find content: 'You entered: cypress' but never did.
        //we are clicking outside the stub so it wont work.

        

        cy.window().then(function(win){
cy.contains("Click for JS Prompt").click()
        //use stub for generating some dummy response.
        cy.stub(win, "prompt").returns("cypress")
        })

        //assert
        cy.contains("You entered: cypress").should("be.visible")
    })

})
