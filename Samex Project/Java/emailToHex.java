package com.techelevator.SamexProject;

public class TextToHexConverter {

	public static String TextToHex (String username) {
		String hexString = "";
		
		for (int i = 0; i < username.length(); i++) {
			char character = username.charAt(i);
			int charToInt = (int)character;
			String newHexDigit = Integer.toHexString(charToInt);
			hexString += newHexDigit;
		}
		return hexString;
	}