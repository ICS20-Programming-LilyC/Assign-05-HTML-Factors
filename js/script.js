// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/17/2023
// This file contains the JS functions for index.html

"use strict";

// Setting variables.
function factorsSent() {
  let counter = 1;
  let numberString = "";
  let message = "";
  
// Initializing variables.
  let number = parseInt(document.getElementById("number").value);
  let absNumber = Math.abs(number);

  // If the user didn't provide any input or their input is equal to 0, display "Please enter a valid number (Zero NOT included)."
  if (isNaN(number) || (number == 0)) {
    message = "Please enter a valid number (Zero NOT included).";
  }
                    
    // Else, the user provided a valid number.
  else {
    counter = -number;
    message = "Here is a list of all the factors for your number:<br><br>";

    //For loop to find factors in normal order.
     for (counter = -absNumber; counter <= absNumber; counter++) {
      if (number % counter == 0) {
        numberString += counter + "<br>";
      }
    }

    // Add the factor list to the message.
     message += numberString;

    // If the number is divided by 2 and has a remainder of 0, then display "The number you entered is even."
    if (number % 2 == 0) {
      message += "The number you entered is even.<br>";
    }

      // Else, display "The number you entered is odd."
    else {
      message += "The number you entered is odd.<br>";
    }
  }

  //Display results back to the user.
  document.getElementById("results").innerHTML = message;
}
