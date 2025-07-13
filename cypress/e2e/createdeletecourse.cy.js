//
describe('create delete courses', () => {
    
    it('create course', () => {
        
       cy.visit("https://ineuron-courses.vercel.app/login");
       cy.get("#email1").type("ineuron@ineuron.ai").should("have.value", "ineuron@ineuron.ai");
       cy.get("#password1").type("ineuron").should("have.value", "ineuron");
       cy.get("button[type='submit']").should("be.enabled").click();
       cy.wait(300);

       //mouse hover on manage
       cy.contains("Manage").realHover();
       cy.wait(300);

       //click manage courses
       cy.contains("Manage Courses").click()

       //count the number of courses
       cy.xpath("//table[contains(@class,'courses')]//tbody//tr").should("have.length", "7");

       //forcefully click on add new course as its hidden behind manage courses
    //    cy.get("Add New Course ").click({force:true}) //this is wrong xpath.
    cy.xpath("//button[normalize-space()='Add New Course']").click({force:true})

        //attach file
        cy.get("#thumbnail").attachFile("back1.jpg");


    });
});