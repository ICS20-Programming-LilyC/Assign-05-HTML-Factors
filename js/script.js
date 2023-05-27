// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/17/2023
// This file contains the JS functions for index.html

"use strict"

function factorsSent() {
  let counter = 1;
  let numberString = "";
  let message = "";

  // Initializing variable and constant
  const REVERSE_YES = document.getElementById("reverse-yes");
  let number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    message = "Please enter a valid number.";
  } 
  
  else if (REVERSE_YES.checked) {
    counter = -number;
    
  } 
  
  else {
    counter = -number;
  }

  if (number < 0) {
    counter = -1;
    number = Math.abs(number);
  } 
  
  else {
    message = "Here is a list of all the factors for your integer:<br><br>";
  }

  while (counter <= number) {
    if (number % counter == 0) {
      numberString += counter + "<br>";
    }
    counter++;
  }

  if (number % 2 == 0) {
    message += "The integer you entered is even.<br>";
  } else {
    message += "The integer you entered is odd.<br>";
  }

  message += numberString;

  document.getElementById("results").innerHTML = message;
}
