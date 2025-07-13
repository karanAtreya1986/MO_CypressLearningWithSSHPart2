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


//when you dont want to use inner describe block.
//dont use this keyword.
//declare global variable.
//assign the data to that and then use it without this.
describe('ddt for cypress', function(){
    testvalueinarray.forEach(function(fixturedata){
        let testdata;
            before(function(){
                cy.fixture(fixturedata.name).then(function(data) {
                   testdata=data;
                })
            })

            it("login to app", function(){
                cy.log(testdata.name);
                cy.log(testdata.email);
                cy.log(testdata.body);

                //lets try to login
                cy.visit("https://practicetestautomation.com/practice-test-login/");

                //call utility for login
                cy.login(testdata.username, testdata.password)
            })
        });
    })
