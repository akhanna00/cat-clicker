var numberOfClicks = 0;
$(".cat-pic").click(function(e){
    // Set a click function on the image to increase a count every time there is a click
    numberOfClicks += 1
    // Update the text on the screen corresponding to number of clicks
    $(".click-display").text("Cat has been clicked " + numberOfClicks + " times");
});

