
describe("get all users" , function(){

    it("verify status code", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            cy.log(data) //this will print object{8} means there is object with 8 entries.

            //get the response in string format.
            cy.log(JSON.stringify(data))
        })
    })

    it("verify status code with stringify", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            
            //get the response in string format.
            cy.log(JSON.stringify(data))
        })
    })

    it("assert should be done with expect not should as no webelement", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            
            //check status code
            expect(data.status).to.eql(200)
        })
    })


    it("verify response for one particular user", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking/441",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            
            //check status code
            expect(data.status).to.eql(200)
        })
    })


    it("verify the last name for an user", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking/441",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            
            //check if response has property called status
            expect(data.body).has.property("lastname")
        })
    })


    it("verify the property and value for an user", function(){

        //request for api testing.
        //if we dont pass which method, it will take as get.
        //we can pass explicitly also using method.

        cy.request({
            method: 'GET',
            url: "https://restful-booker.herokuapp.com/booking/202",
            // headers: {
            //     "Authorisation": "Bearer 34234324weewrewrewrw"
            // }
        })
        .then(function(data){
            
            cy.log(JSON.stringify(data))

            //verify the property and value
            expect(data.body).has.property("firstname", "John")
        })
    })
})