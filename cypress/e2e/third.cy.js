//
//using arrow function
describe('this is my first test suites', () => {
    
    it('first tc', () => {
        expect(true).to.equal(true)
    });

    it('second test', () => {
        expect(true).to.equal(false)
    });

    it('third tc', () => {
        expect(false).to.equal(false)
    });

    it.skip('fourth tc', () => {
        expect(false).to.equal(true)
    });

    //when no body then the test is skipped.
    it('fifth tc')
});

//multiple describe allowed in one file.
describe('This is my third test suite', ()=> {
    
    it('My First TC',()=>
    {
        expect(true).to.equal(true)
    })

    it('My Second Test',()=>{
        expect(true).to.equal(false)
    })

    it.skip('My Third Test',()=>{
        expect(true).to.equal(false)
    })

    it("My 4th Test")

})