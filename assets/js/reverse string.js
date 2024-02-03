function reverseString(str) {
  var inputElement = document.getElementById("inputString");
  var resultElement = document.getElementById("Result");
  var str = inputElement.value;
  let newstring = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newstring += str[i];
  }
  resultElement.textContent = newstring;
}

