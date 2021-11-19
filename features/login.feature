Feature: Login Feature Tests

    User should be able to login into the system

    Scenario Outline: User should be able to login with valid credentials
    Given I am on the login page
    When I type <username> and <password> 
    And I click on the login button
    Then I should see the "My Account" page
    
    Example: login data
    | username                 |  password |
    | "sqa.test.eng@gmail.com" | "12345"   |

