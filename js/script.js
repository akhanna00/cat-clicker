// Setup counters for each cat and names
var catOneClicks = 0;
var catTwoClicks = 0;
var catOneName = "Lazy";
var catTwoName = "Handsome";

// Add cat names to each image
$(".cat-1").prepend("<h3>" + catOneName + "</h3>");
$(".cat-2").prepend("<h3>" + catTwoName + "</h3>");

// Add text that displays number of times each cat has been clicked(starting at 0)
$(".cat-1").append('<h3 class="click-display-1">' + catOneName + ' has been clicked 0 times</h3>');
$(".cat-2").append('<h3 class="click-display-2">' + catTwoName + ' has been clicked 0 times</h3>')


// Everytime each cat has been clicked update its respective counter and update
// the number that is displayed
$(".cat-pic-1").click(function(e){
    catOneClicks += 1
    $(".click-display-1").text(catOneName + " has been clicked " + catOneClicks + " times");
});

$(".cat-pic-2").click(function(e){
    catTwoClicks += 1
    $(".click-display-2").text(catTwoName + " has been clicked " + catTwoClicks + " times");
});

