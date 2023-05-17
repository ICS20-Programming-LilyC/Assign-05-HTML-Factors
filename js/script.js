// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/17/2023
// This file contains the JS functions for index.html

"use strict"

function factorsSent
  
   // initializing the numbers and message variable to an empty string
  let number = "";
  let counter = "";

  // getting the user values for the minimum and maximum numbers
  let number = parseInt(document.getElementById("number").value);

  // initializing the counter variable to the minNumber
  let counter = number

  if ((isNaN(number) {
    message = "Please enter valid numbers.";
  }

  // else, complete while loop to create list of odd numbers between min and max
  else {
    
    // while loop that specifies the range
    while (counter <= number) {

      // if statement checks for odd numbers, provided that the condition in the while statement is true. It uses the remainder operand.
      if (number % counter == 0) {
        number += counter + "<br>";
      }
      counter++;
    }
    message = "Here is a list of all the factors fro the number you entered:<br><br>" + number;
  }

  // displaying the results (the range of odd numbers) back to the user
  document.getElementById("results").innerHTML = message;
}

