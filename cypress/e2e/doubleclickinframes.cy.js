//
describe('"check iframe in double click', () => {
    it('double click in iframe', function(){

        //go to the website
        cy.visit("https://api.jquery.com/dblclick/")

        //load the iframe
        //as we dont have more iframes in this page, so we can use the tag name.
        cy.frameLoaded("iframe")

        //now go inside iframe
        //get all siblings of span tag and when we see the word dbl after double clicking
        //check if that value is present.
        cy.iframe().contains("Double click the block")
        .siblings()
        .eq(0)
        .dblclick()
        .should("have.class","dbl");
    });
});