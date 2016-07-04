$(function() {
    var catData = {
        // Setup array of Cat objects. Each cat object contains a name
        // and number of clicks
        catInfo: [
            {
                catName: "Leo",
                catClicks: 0
            },
            {
                catName: "Mr Whiskers",
                catClicks: 0
            },
            {
                catName: "Sunstorm",
                catClicks: 0
            },
            {
                catName: "Furball",
                catClicks: 0
            },
            {
                catName: "Tufts",
                catClicks: 0
            }
        ],
        // Setup empty object to represent the Cat to be displayed
        currentCat: {}
    };

    var octupus = {
        init: function() {
            // Initialize Octupus function by running
            // viewCatLinks.init()
            viewCatLinks.init();
        },

        clickCatLink: function(catNum) {
            // When a cat is clicked, add a number and an image link to
            // the current cat object
            catData.currentCat.catNum = catNum;
            catData.currentCat.image = "img/cat-pic-" + catNum + ".jpg";
        },

        updateCatClicks: function() {
            // When a cat is clicked increase the clicks of that cat
            // object
            catData.catInfo[catData.currentCat.catNum].catClicks++;
        },

        getCatInfo: function() {
            // Return the array of cat objects
            return catData.catInfo;
        },

        getCatName: function(catNum) {
            // Return the cat name representing the
            // cat number in the array of cat objects
            return catData.catInfo[catNum].catName;
        },

        getCatImageOfCurrentCat: function() {
            // Return the image link of the current cat object
            return catData.currentCat.image;
        },

        getCatNameOfCurrentCat: function() {
            // Return the name of the current cat object
            return catData.catInfo[catData.currentCat.catNum].catName;
        },

        getCatClicksOfCurrentCat: function() {
            // Return the number of clicks of the current cat object
            return catData.catInfo[catData.currentCat.catNum].catClicks;
        }
    };

    var viewCatLinks = {
        init: function() {
            // Call the render function of the viewCatLinks
            // function
            viewCatLinks.render();
        },

        render: function() {
            // Iterate through the array of cat objects and display
            // the cat names. Setup a click handler if any name is clicked
            for (var catNum = 0; catNum < octupus.getCatInfo().length; catNum++) {
                $(".cat-names").append("<a href='#'><h2 id='" + catNum + "'>" + octupus.getCatName(catNum) + "</h2></a>");
                $("#" + catNum).click(function(catNumCopy){
                    return function() {
                        octupus.clickCatLink(catNumCopy);
                        viewCatPic.init();
                    };
                }(catNum));
            }
        }
    };

    var viewCatPic = {
        init: function() {
            // store the location of the class cat display as this.catDisplay
            this.catDisplay = $(".cat-display");
            // render the picture
            viewCatPic.render();
        },

        render: function() {
            // Display an image for each cat
            this.catDisplay.html("<img src=" + octupus.getCatImageOfCurrentCat() + ">");
            // Display the name of the cat on the top
            this.catDisplay.prepend("<h2>" + octupus.getCatNameOfCurrentCat() + "</h2>");
            // Display the number of times the cat has been clicked
            this.catDisplay.append("<h2>" + octupus.getCatNameOfCurrentCat() + " has been clicked <span class='clickTimes'>" +
                    octupus.getCatClicksOfCurrentCat() + "</span> times</h2>");

            // Create a clicker for each cat image
            $("img").click(function(e){
                // Update the number of clicks by calling octupus.updateCatClicks()
                octupus.updateCatClicks()
                // Display the updated number of clicks
                $(".clickTimes").text(octupus.getCatClicksOfCurrentCat());
            });
        }
    };
    octupus.init();
}());
