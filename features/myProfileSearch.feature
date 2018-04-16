@watch
Feature: Search My Profile

Scenario: Search your name in google and open your linkedin profile and validate your name and current job
    Given I open "http://www.google.com"
    Then I fill search bar with "Milagros Oliva Mangas"
    And I click on "Google Search" button
    And I click on "https://es.linkedin.com/in/milagros-oliva-mangas-2201533a" link
    Given I open "https://es.linkedin.com/in/milagros-oliva-mangas-2201533a"
    Then I validate in my profile "Milagros Oliva Mangas" text
    And I validate in my profile "QA tester at UST Global" text