//use multiple fixtures for testing
//declare array
//context for us to know which test is running like tc number.
//we need outer describe block for the entire suite.
//inner describe block for the iterations.
const testvalueinarray=[

    {
        "name": "test1",
        "context" :"1"
    },
     {
        "name": "test2",
        "context" :"2"
    }
]



describe('ddt for cypress', function(){
    testvalueinarray.forEach(function(fixturedata){
        //get the context using fixture data as it holds the complete data.
        describe(fixturedata.context, function(){
            // let testdata;
            //use before to load fixtures like we used before each.
            //get the test data one by one.
            before(function(){
                cy.fixture(fixturedata.name).then(function(testdata) {
                   this. testdata=testdata;
                })
            })

            it("login to app", function(){
                cy.log(this.testdata.name);
                cy.log(this.testdata.email);
                cy.log(this.testdata.body);

                //lets try to login
                cy.visit("https://practicetestautomation.com/practice-test-login/");

                //call utility for login
                cy.login(this.testdata.username, this.testdata.password)
            })
        });
    })
});