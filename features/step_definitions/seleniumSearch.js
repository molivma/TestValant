module.exports = function() {

    this.Then(/^Page opened is "([^"]*)"$/, function(address) {

        expect(browser.url().value).toEqual(address);

    });
};