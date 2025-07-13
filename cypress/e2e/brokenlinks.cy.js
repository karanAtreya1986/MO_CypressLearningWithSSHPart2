//broken links testing.

describe("broken links testing", function(){

    it("number one", function(){

        //use request and give the url.
        cy.visit("https://ineuron-courses.vercel.app/login")
        
        //get all links and then iterate using each function

        cy.get("a").each(link=>{

            cy.request({

                //to get all the urls dynamically use the prop and pass in href attribute.
                url: link.prop("href"),
                //we dont want test case to fail when there is some status code.
                failOnStatusCode: false
            })
            //use then for validations
            .then(function(resp){
                cy.log(resp.status)
            })
        })
})})