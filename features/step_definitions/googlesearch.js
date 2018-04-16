module.exports = function() {
    this.Given(/^I open "([^"]*)"$/, function(pageUrl) {
        browser.url(pageUrl);
    });
    this.Then(/^I fill search bar with "([^"]*)"$/, function(searchText) {
        browser.setValue('input[name=q]', searchText);
    });
    this.Then(/^I click on "([^"]*)" button$/, function(buttonName) {

        if (buttonName == 'Google Search') {
            browser.click('input[name=btnK]');
        } else if (buttonName == 'Im feeling lucky') {
            browser.click('input[name=btnI]');
        }

    });
    this.Then(/^I see page with more than "([^"]*)" results$/, function(searchNum) {
        browser.waitForExist('#resultStats', 3000);
        var text = browser.getText('#resultStats');
        var texto = text.split(" ");
        var numbersText = texto[1].split(',');
        var number = '';
        for (var i = 0; i < numbersText.length; i++) {
            number += numbersText[i];
        }

        expect(number).toBeGreaterThan(searchNum);

    });

    this.Then(/^I see page with less than "([^"]*)" results$/, function(searchNum) {

        browser.waitForExist('#resultStats', 3000);
        var text = browser.getText('#resultStats');

        var texto = text.split(" ");
        var numbersText = texto[1].split(',');
        var number = '';
        for (var i = 0; i < numbersText.length; i++) {
            number += numbersText[i];
        }

        expect(searchNum).toBeLessThan(number);


    });


};