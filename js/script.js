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
  
// Initalizing variable and constant
  const radio = document.getElementById("reverse-yes");
  let number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    message = "Please enter a valid number.";
  } else if {
    (radio.checked) {
      counter = number;
    } else {
      counter = 1;
    }

    if (number < 0) {
      counter = -1;
      number = Math.abs(number);
      message = "Here is a list of all the factors for the negative number you entered:<br><br>";
    } else {
      message = "Here is a list of all the factors for the number you entered:<br><br>";
    }

    while (counter <= number) {
      if (number % counter == 0) {
        numberString += counter + "<br>";
      }
      counter++;
    }

    if (number % 2 === 0) {
      message += "The number you entered is even.<br>";
    } else {
      message += "The number you entered is odd.<br>";
    }

    message += numberString;
  }

  document.getElementById("results").innerHTML = message;
}
