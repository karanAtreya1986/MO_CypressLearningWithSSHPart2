//

describe('test multiple checkbox', () => {
    
    it('test multi checkbox', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

        //click on all checkboxes
        cy.xpath("//input[@type='checkbox']").click({multiple:true})
    });



    it('check the first checkbox', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

        //click on first checkbox
        cy.xpath("//input[@type='checkbox']").first().click()
    });



    it('check the last checkbox', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

        //click on first checkbox
        cy.xpath("//input[@type='checkbox']").last().click()
    });


    it('check the checkbox based on number', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

        //click on first checkbox using eq method
        //eq needs index number to be passed.
        cy.xpath("//input[@type='checkbox']").eq(1).click()
    });


     it('click on the checkbox based on the option name', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

        //click on checkbox next to option based on the option 2 value.
        cy.xpath("//label[@for='benz']//preceding::input[@id='checkBoxOption1']").click()
    });


    it('click on the first radio button', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

       //click on the first radio button
       cy.xpath("//input[@type='radio']").first().click()
    });


     it('select drop down based on index', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

       //select drop down based on index
       cy.get("#dropdown-class-example").select(1)
    });


     it('select drop down based on value attribute', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //set viewport
        cy.viewport(1920, 1080)

        //use contains to check the state of element
        cy.contains("Checkbox Example").should("be.visible")

       //select drop down based on index
       cy.get("#dropdown-class-example").select("option2")
    });



    it('button should be enabled then click', () => {
        
        cy.visit("https://www.saucedemo.com/")

        //set viewport
        cy.viewport(1920, 1080)

       //first check login button is enabled then click
       cy.get("#login-button").should("be.enabled").click()
    });


    it('check if retries is working fine', () => {
        
        cy.visit("https://www.saucedemo.com/")

        //set viewport
        cy.viewport(1920, 1080)

       //give wrong locator.
       //it will run three more times after first failure.
       cy.get("#login-button1").should("be.enabled").click()
    });
});