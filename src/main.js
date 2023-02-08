"use strict";

const reset = document.querySelector(".reset");

function appendToInput(val) {
  document.getElementById("input").value += val;
}

function calculate() {
  var input = document.querySelector("#input").value;
  var result = eval(input);
  document.querySelector(".result").value = result;
}

reset.addEventListener("click", function () {
  document.getElementById("input").value = "";
});
