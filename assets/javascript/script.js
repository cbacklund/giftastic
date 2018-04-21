var topics = ["Cats", "Dogs", "Dancing", "Pigs", "Turtles", "Eagles"];
var apiKey = "7GOfzgZSUZPT7pHGGFd4f2HzXB5ybe3D";
var URL = "http://api.giphy.com/v1/gifs/search?q=" 
var limit = "&limit=10";
var rating = "&rating=pg";


// time to get this whole thing started
$(document).ready(function () {


    // create the function to create a new button when entered in form
    function createButtons() {
        $("#buttonRange").empty(); // use this so it doesn't add more buttons from the array

        // need to pull the items from the array, and create the buttons here
        for (var i = 0; i < topics.length; i++) {

            var butt = $("<button>");

            butt.addClass("btn btn-info text-light btnGif m-2");
            butt.attr("data-name", topics[i]);
            butt.text(topics[i]);
            $("#buttonRange").append(butt);
        }
    };

    createButtons();


    // create the ajax magic when a topic button is clicked
    $(".btnGif").on("click", function (event) {
        $("#giphypop").empty();
        var gifpic = $(this).text();

        var queryUrl = URL + gifpic + "&api_key=" + apiKey + limit + rating; 

        console.log(queryUrl);

            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function (response) {
                var gifObject = response.data

                console.log(gifObject);
                
                // looping through the 10 items in the response object to create the images
                for (var j = 0; j < gifObject.length; j++) {
                // creating a div to hold the rating text and the gif image
                var gifDiv = $("<div>");
                gifDiv.css("display", "inline-block");
                // pulling the rating and appending it to the div
                var rating = gifObject[j].rating.toUpperCase();
                var rateText = $("<h4>").text("Rating: " + rating); 
                rateText.addClass("ml-3")
                gifDiv.append(rateText); 
                // pulling the image url and appending it to the div
                var gifs = $("<img>");
                var imgURLstill = gifObject[j].images.fixed_height_small_still.url;
                var imgURLanimate = gifObject[j].images.fixed_height_small.url;
                gifs.attr("data-state", "still")
                gifs.attr("data-still", imgURLstill);
                gifs.attr("data-animate", imgURLanimate);
                gifs.attr("src", imgURLstill);
                gifs.addClass("gifClass m-3");
                gifDiv.append(gifs);

                console.log(imgURLstill);
                console.log(imgURLanimate);

                $("#giphypop").append(gifDiv);

                } // closing out the for loop

            }) // response function close out

    }); // buttonRange on click close out

    // input field and submit button to add the topic to the array
    $("#gifButton").on("click", function (event) {
        event.preventDefault();

        var newStuff = $("#exampleTopic").val().trim();
        topics.push(newStuff);
        createButtons();
    });

    $(".gifClass").on("click", function() {

        var state = $(this).attr("data-state");

        console.log(state);
        
        if (state === "still") {
          $(this).attr("src", imgURLanimate);
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", imgURLstill);
          $(this).attr("data-state", "still");
        }
      });


}); // document ready close out





