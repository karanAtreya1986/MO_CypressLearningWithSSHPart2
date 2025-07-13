class login{

    //use get and set directly

    get enterUserName(){
return cy.get('#email1')
    }

    //how to write above method with set.
    set   enterUserNameWithSet(email){
return cy.get('#email1').type(email)
    }


    get enterPassword(){
        return cy.get('#password1')
    }

     //how to write above method with set.
    set   enterPasswordWithSet(password){
return cy.get('#password1').type(password)
    }

    get clickOnLoginButton(){
        return cy.get("button[type='submit']")
    }

    //how to write above method with set.
    //this is not allowed in set.
    //compile error - A 'set' accessor must have exactly one parameter.ts(1049)

//     set   clickOnLoginButtonWithSet(){
// return cy.get("button[type='submit']").click()
//     }

      set   clickOnLoginButtonWithSet(locator){
return cy.get(locator).click()
    }
}

//see how to export
export default login;