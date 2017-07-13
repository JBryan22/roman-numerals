$(document).ready(function() {
  $("#decimal").submit(function(event) {
    event.preventDefault();
    var numbersInput = parseInt($("#numbers").val());
    $(".output").text(convertNumToRom(numbersInput));
  });
});

var romanSymbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
var romanValues = [1000, 500, 100, 50, 10, 5, 1];

var convertNumToRom = function(numbers) {
  var index = 0;
  var roman = [];
  while (index < romanValues.length) {
    if (numbers >= romanValues[index]) {
      (numbers -= romanValues[index]);
      roman.push(romanSymbols[index]);
    } else {
      index++;
    }
  }
  return roman.join('');
}
