@AmazonLogin
Feature: Amazon Login


@scen1
Scenario: Veriy title
When The user is on the home page
Then Verify page title


@scen2
Scenario: Successful Login
Given The user is on the website page
When user clicks on the Login button
And user enter email
And clicks on continue
And user enter password
And user click on Login
Then user should be logged into the application
