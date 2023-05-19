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

  let number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    message = "Please enter valid numbers.";
  } 

  // Else...
  else {
    while (counter <= number) {
      if (number % counter === 0) {
        numberString += counter + "<br>";
      }
      counter++;
    }

    message = "Here is a list of all the factors for the number you entered:<br><br>" + numberString;
  }

  document.getElementById("results").innerHTML = message;
}
