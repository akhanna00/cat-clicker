// Create an array of clicks for each cat(starting at 0)
catClicks = [0, 0, 0, 0, 0];
// Create an array for the names of each cat
catNames = ["Leo", "Mr Whiskers", "Sunstorm", "Furball", "Tufts"];

// Setup a for loop to iterate through all of the cats
for (var catNum = 0; catNum < catClicks.length; catNum++) {
    // Add each cat name to the display
    $(".cat-names").append("<h2 id='" + catNum + "'>" + catNames[catNum] + "</h2>")
    // Create a clicker for each name listed
    $("#" + catNum).click(function(catNumCopy){
        return function() {
            // Display an image for each cat
            $(".cat-display").html("<img src=img/cat-pic-" +
                catNumCopy + ".jpg alt='" + catNames[catNumCopy] + "'>");
            // Display the name of the cat on the top
            $(".cat-display").prepend("<h2>" + catNames[catNumCopy] + "</h2>");
            // Display the number of times the cat has been clicked
            $(".cat-display").append("<h2>" + catNames[catNumCopy] + " has been clicked <span class='clickTimes'>" +
                    catClicks[catNumCopy] + "</span> times</h2>");

            // Create a clicker for each cat image
            $("img").click(function(e){
                // Update the number of clicks
                catClicks[catNumCopy] += 1;
                // Display the updated number of clicks
                $(".clickTimes").text(catClicks[catNumCopy]);
            });
        };
    }(catNum));
}