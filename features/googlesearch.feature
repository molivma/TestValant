@watch
Feature: Search in google

Scenario: Search Selenium and validate if returns more than "25000000" results
    Given I open "http://www.google.com"
    Then I fill search bar with "Selenium"
    Then I click on "Google Search" button
    And I see page with more than "25000000" results

Scenario: search "España" and validate if return more than "900000000" results
    Given I open "http://www.google.com"
    Then I fill search bar with "España"
    And I click on "Google Search" button
    Then I see page with more than "900000000" results

Scenario: search "Madrid" and validate if return less than "1000000" results
    Given I open "http://www.google.com"
    Then I fill search bar with "Madrid"
    And I click on "Google Search" button
    And I see page with less than "1000000" results

Scenario: search "Selenium" in "google.es" and validate if results are less than 10
    Given I open "http://www.google.es"
    Then I fill search bar with "Selenium"
    And I click on "Google Search" button
    And I see page with less than "10" results


