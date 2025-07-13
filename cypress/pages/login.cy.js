class login{

    enterusername(){
        return cy.get('#email1')
    }

    enterpassword(){
        return cy.get('#password1')
    }

    clickonloginbutton(){
        return cy.get("button[type='submit']")
    }

    //more optimised way to club methods
    loginIntoApplication(username, password){
        cy.get('#email1').type(username)
        cy.get('#password1').type(password)
        cy.get("button[type='submit']").click()
    }
}

//see how to export
export default login;