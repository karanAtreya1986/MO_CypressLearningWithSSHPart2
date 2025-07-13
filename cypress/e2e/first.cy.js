//
//using anonymous function.
describe('this is my first test suites', () => {
    
    it('first tc', function(){
        expect(true).to.equal(true)
    });

    //this is the only case which runs.
    it.only('second test', function(){
        expect(true).to.equal(false)
    });

    it('third tc', function(){
        expect(false).to.equal(false)
    });

    it.skip('fourth tc', function(){
        expect(false).to.equal(true)
    });

    //when no body then the test is skipped.
    it('fifth tc')
});