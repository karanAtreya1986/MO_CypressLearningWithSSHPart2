import registrationpage from "../pages/registration.cy.js"


//working with fixture data.
describe("login with pom with fixture", function(){

    //we need before each to load the fixture data.
    //pass json file name, extension not mandatory.
    beforeEach("load fixture data", function(){
        cy.fixture("pomframework.json").then(function(data){
            this.data=data;

        })
    })
    it("valid login", function(){

        const newuser=new registrationpage();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //click on new user link
       newuser.clickonnewuserlink().click()

    //    //we can have such validations also in test class
    //    newuser.clickonnewuserlink().should("be.visible").click()

       //enter first name
       newuser.enterfirstName(this.data.name);

       //enter email
       newuser.enterEmail(this.data.email)

         //enter password
       newuser.enterPassword(this.data.password)
        
})

})
