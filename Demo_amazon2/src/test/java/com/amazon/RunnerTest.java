package com.amazon;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.utilites.*;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


import com.amazon.pageLocaters.*;
import com.amazon.pageLocaters.LoginPageLocators;

import static com.utilites.GenericDrivers.*;

import java.util.Properties;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",glue= "com/amazon/stepdefinitions",
 

plugin = {
        //"rerun:target/rerun.txt",
        "pretty",
       "junit:target/cucumber-xml-report.xml",
        "html:target/cucumber-reports",
        "json:target/test-results.json"
},
monochrome = true,
tags="@scen1, @scen2" )


public class RunnerTest {
	public static LoginPageLocators loginPageInstance;
	public static LoginPage2Locators loginPage;
	public static ItemSearchLocator searchitem;
 
  @BeforeClass
   public static void setUp()
  {
	  Properties properties = PropertiesFile.getPropertiesFile();
	  String browser = properties.getProperty("browser");
	  GenericDrivers.Browser(browser);
	  pageObjectSetup();
	 
	}
  
  
  @AfterClass
  public static void close()
  {
	  
	  driver.quit();
  }
  
  public static void pageObjectSetup()
  {
	 //driver = GenericDrivers.getDriver();
	 loginPageInstance = new LoginPageLocators(driver);
	 loginPage =new LoginPage2Locators(driver);
	 searchitem =new ItemSearchLocator(driver);
  }
  
}

