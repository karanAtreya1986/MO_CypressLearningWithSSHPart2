import loginpage from "../pages/login.cy.js"
import loginpage1 from "../pages/loginwithgettersetter.cy.js"
import newuserpage from "../pages/registration.cy.js"

describe("login with pom", function(){
    it("valid login", function(){

        //create object of login page class.
        //here if we use same name login for the page class, for the object, for the import.
        //we get error as Cannot access 'login' before initialization
        //js is confused what this login refers to.
        //so when importing change some name and then use that name for object creation.

        const login=new loginpage();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //enter user name password and click login
        login.enterusername().type("ineuron@ineuron.ai")
        login.enterpassword().type("ineuron")
        login.clickonloginbutton().click()

        
    })


    it("valid login functionality all steps clubbed into one method", function(){

        //call the clubbed method at once.

        const login=new loginpage();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //enter user name password and click login
       login.loginIntoApplication("dummy@gmail.com", "dummy")

        
    })


    it("login with getter and setter", function(){

        const login=new loginpage1();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //enter user name password and click login
        //you dont need parenthesis next to method names
       login.enterUserName.type("mukesh@gmail.com")
       login.enterPassword.type("tester")
       login.clickOnLoginButton.click()

        
    })


    it("login with setter only", function(){

        const login=new loginpage1();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //how to use setter now.

       login.enterUserNameWithSet="tiger@gmail.com"
       login.enterPasswordWithSet="programmer"
       login.clickOnLoginButtonWithSet="button[type='submit']"

        
    })


    it("register new user on the page", function(){

        const newuser=new newuserpage();

        //visit url
        cy.visit("https://ineuron-courses.vercel.app/login")

        //click on new user link
       newuser.clickonnewuserlink().click()

       //enter first name
       newuser.enterfirstName().type("karan tiger")



        
    })
})