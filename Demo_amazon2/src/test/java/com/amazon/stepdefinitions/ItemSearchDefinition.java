package com.amazon.stepdefinitions;

import static com.utilites.GenericDrivers.driver;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.Properties;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.utilites.PropertiesFile;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static com.amazon.RunnerTest.searchitem;

public class ItemSearchDefinition {
	Properties properties = PropertiesFile.getPropertiesFile();
	
 	@Given("^user is on Home page$") 
 	    public void user_is_on_Home_page() throws InterruptedException {
		 
 		 String url = properties.getProperty("url");
 		driver.get(url);
 		Thread.sleep(1000);
 	};
	
	  
 	@When("^user enter keyward$")
 	public void user_enter() throws InterruptedException	 
 	{
 		Thread.sleep(1000);
 		 String keyward = properties.getProperty("keyward");
 		searchitem.searchfield.sendKeys(keyward);
		
 		Thread.sleep(3000);
		
 		searchitem.searchfield.sendKeys(Keys.DOWN);
 		searchitem.searchfield.sendKeys(Keys.DOWN);
 		searchitem.searchfield.sendKeys(Keys.DOWN);
		
 		Thread.sleep(2000);
		
 		searchitem.searchfield.sendKeys(Keys.ENTER);
 		Thread.sleep(5000);
 	};
	    
 	@And("^user select on third option from the list$") 
	
 	public void user_select_on_third_option_from_the_list() throws AWTException, InterruptedException {
		
 		Thread.sleep(1000);	
 	  searchitem.searchsuggest.get(2).click();
 	  Thread.sleep(1000);
		
		
 	};

 	@Then("^user should navigates to item detail page$")
 	public void user_should_navigates_to_item_detail_page()
 	{
 	   System.out.println("Changes in branch logout ");
 	};

}
