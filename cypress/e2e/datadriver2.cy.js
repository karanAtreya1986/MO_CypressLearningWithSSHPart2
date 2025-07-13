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


//we will get run time error.
//Cannot read properties of undefined (reading 'name')
//because now this is confused which one to run so only one passes.
//we are not using inner describe block.
describe('ddt for cypress', function(){
    testvalueinarray.forEach(function(fixturedata){
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
