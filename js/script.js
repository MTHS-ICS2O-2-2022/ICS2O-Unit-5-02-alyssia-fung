// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  let buttonPositiveChecked = document.getElementById("positive").checked

  if (buttonPositiveChecked == true) {
    let randomNumber = Math.floor(Math.random() * 6)
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  } else {
    let randomNumber = Math.floor(Math.random() * -6)
    document.getElementById("radio-button-value").innerHTML =
      "Value is: " + randomNumber
  }
}
