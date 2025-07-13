//
describe('fixture for json file', () => {

    beforeEach(function(){
        
        cy.fixture("example.json").then(function(jsondata){
                this.jsondata=jsondata;
        })
        
    });



//when we use arrow function we get this error -
//Cannot read properties of undefined (reading 'jsondata')
    it('fixture first case', function() {
        cy.log(this.jsondata.name)
    });
});