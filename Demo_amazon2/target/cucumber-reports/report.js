$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginAmaz.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon Login",
  "description": "",
  "id": "amazon-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AmazonLogin"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Veriy title",
  "description": "",
  "id": "amazon-login;veriy-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@scen1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user is on the home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify page title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.The_user_is_on_the_home_page()"
});
formatter.result({
  "duration": 7954994668,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.Verify_page_title()"
});
formatter.result({
  "duration": 301508917,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login",
  "description": "",
  "id": "amazon-login;successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@scen2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "The user is on the website page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter email",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should be logged into the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.The_user_is_on_the_website_page()"
});
formatter.result({
  "duration": 2254919971,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 1285450196,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enter_email()"
});
formatter.result({
  "duration": 353285648,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.clicks_on_continue()"
});
formatter.result({
  "duration": 1367811996,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enter_password()"
});
formatter.result({
  "duration": 148852764,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_click_on_Login()"
});
formatter.result({
  "duration": 3326899998,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_be_logged_into_the_application()"
});
formatter.result({
  "duration": 20205,
  "status": "passed"
});
});