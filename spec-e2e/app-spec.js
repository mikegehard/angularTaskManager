describe('my angular app', function () {

    describe('visiting the home page', function () {
        it('should show me a greeting', function () {
            browser.get('/');
            expect(element(by.css('body')).getText()).toEqual('Hello!');
        });
    });
});
