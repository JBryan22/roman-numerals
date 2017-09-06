$(document).ready(function() {
  $("#decimal").submit(function(event) {
    event.preventDefault();
    var numbersInput = parseInt($("#numbers").val());
    $(".output").text(convertNumToRom(numbersInput));
  });
});
