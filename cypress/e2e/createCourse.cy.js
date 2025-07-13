//
describe('create delete courses', function () {

    beforeEach(function(){
        cy.fixture("createuser").then(function(jsondata){
            this.jsondata=jsondata;
        })
        
    });

    //go to the website and try to fill few fields using fixture.
    
    it('create course', function()  {
        
       cy.visit("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
       cy.get("#name").type(this.jsondata.name).should("have.value", this.jsondata.name);
       cy.get("#email").type(this.jsondata.email).should("have.value", this.jsondata.email);
       cy.xpath("//div[3]//div[1]//div[1]//div[2]//input[1]").click();
       cy.get("#mobile").type(this.jsondata.mobile).should("have.value", this.jsondata.mobile)
       cy.get("#subjects").type(this.jsondata.subjects).should("have.value", this.jsondata.subjects)

});
});