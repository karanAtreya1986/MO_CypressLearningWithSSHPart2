class newuser{

    clickonnewuserlink(){
        return cy.contains("New user? Signup")
    }

    enterfirstName(name){
        return cy.get('#name').type(name);
    }

    enterEmail(email){
        return cy.get('#email').type(email);
    }

    enterPassword(password){
        return cy.get('#password').type(password);
    }
}

export default newuser;