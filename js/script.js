// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/17/2023
// This file contains the JS functions for index.html

"use strict";

function factorsSent() {
  let counter = 1;
  let numberString = "";
  let message = "";

  const REVERSE_YES = document.getElementById("reverse-yes");
  let number = parseInt(document.getElementById("number").value);
  let absNumber = Math.abs(number);

  if (isNaN(number)) {
    message = "Please enter a valid number.";
  } 
  
  else if (number == 0) {
    message = "Zero has no factors.";
  } 
    
  else if (REVERSE_YES.checked == true) {
    counter = -number;
    message = "Here is a list of all the factors for your number:<br><br>";

    for (counter = -absNumber; counter <= absNumber; counter++) {
      if (absNumber % counter == 0) {
        numberString += counter + "<br>";
      }
    }

    if (number % 2 == 0) {
      message += "The number you entered is even.<br>";
    } 
    
    else {
      message += "The number you entered is odd.<br>";
    }

    message += numberString;
  }
  
  else {
    counter = -number;
    message = "Here is a list of all the factors for your number:<br><br>";

     for (counter = -absNumber; counter <= absNumber; counter++) {
      if (number % counter == 0) {
        numberString += counter + "<br>";
      }
    }


    if (number % 2 == 0) {
      message += "The number you entered is even.<br>";
    } 
    
    else {
      message += "The number you entered is odd.<br>";
    }

    message += numberString;
  }

  document.getElementById("results").innerHTML = message;
}
