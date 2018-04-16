module.exports = function() {
    this.Then(/^I click on "([^"]*)" link$/, function(link) {
        var selector = 'a[href="' + link + '"]';
        browser.click(selector);

    });
    this.Then(/^I validate in my profile "([^"]*)" text$/, function(text) {

        var name = '';
        if (text == 'Milagros Oliva Mangas') {
            browser.waitForExist('#name', 5000);
            name = browser.getText('#name');
        } else if (text == 'QA tester at UST Global') {
            browser.waitForExist('#headline title', 5000);
            name = browser.getText('#headline title');
        }
        expect(name).toEqueal(text);
    });


};