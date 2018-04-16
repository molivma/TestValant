Feature: Search in google using Im feeling lucky

Scenario: search "Selenium" in "google.es" using "i'm feeling lucky" and validate if the page opened is https://www.seleniumhq.org/
    Given I open "http://www.google.com/ncr"
    Then I fill search bar with "Selenium"
    Then I click on "Im feeling lucky" button
    And Page opened is "https://www.seleniumhq.org/"