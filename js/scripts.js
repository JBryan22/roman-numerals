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
  // if number too big
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

var counter = 1;
for (var i = 1; i < roman.length; i++) {
  if (roman[i] === roman[i-1]) {
    counter++;
  }
  if (counter >= 4) {
    roman.splice(i - 2, 3, romanSymbols[(romanSymbols.indexOf(roman[i])) - 1]);
  }
}

  return roman.join('');
}
