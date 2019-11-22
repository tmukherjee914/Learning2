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
  "duration": 1702411794,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.Verify_page_title()"
});
formatter.result({
  "duration": 302452204,
  "error_message": "org.assertj.core.api.SoftAssertionError: \nThe following assertion failed:\n1) \nExpecting:\n \u003c\"Robot Check\"\u003e\nto be equal to:\n \u003c\"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in\"\u003e\nignoring case considerations\nat LoginStepDefinitions.Verify_page_title(LoginStepDefinitions.java:41)\n\n\tat org.assertj.core.api.SoftAssertions.assertAll(SoftAssertions.java:158)\n\tat com.amazon.stepdefinitions.LoginStepDefinitions.Verify_page_title(LoginStepDefinitions.java:44)\n\tat ✽.Then Verify page title(LoginAmaz.feature:8)\n",
  "status": "failed"
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
  "duration": 2101890429,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 1798951555,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enter_email()"
});
formatter.result({
  "duration": 383859629,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.clicks_on_continue()"
});
formatter.result({
  "duration": 1768510879,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enter_password()"
});
formatter.result({
  "duration": 47273381,
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\n\tat com.amazon.stepdefinitions.LoginStepDefinitions.user_enter_password(LoginStepDefinitions.java:88)\n\tat ✽.And user enter password(LoginAmaz.feature:17)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_be_logged_into_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search item",
  "description": "",
  "id": "search-item",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search an item",
  "description": "",
  "id": "search-item;search-an-item",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter keyward",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user select on third option from the list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should navigates to item detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "ItemSearchDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 3098130660,
  "status": "passed"
});
formatter.match({
  "location": "ItemSearchDefinition.user_enter()"
});
formatter.result({
  "duration": 14392980201,
  "status": "passed"
});
formatter.match({
  "location": "ItemSearchDefinition.user_select_on_third_option_from_the_list()"
});
formatter.result({
  "duration": 2003575036,
  "status": "passed"
});
formatter.match({
  "location": "ItemSearchDefinition.user_should_navigates_to_item_detail_page()"
});
formatter.result({
  "duration": 99920,
  "status": "passed"
});
});