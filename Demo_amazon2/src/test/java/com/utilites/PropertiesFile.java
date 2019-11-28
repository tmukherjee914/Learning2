package com.utilites;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesFile {	 
	
	public static Properties getPropertiesFile()  {
		
		Properties prop = new Properties();
		InputStream input;
		try {
			input = new FileInputStream("src/test/resources/config/config.properties");
			prop.load(input);		
			
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prop;
		
	}

}
