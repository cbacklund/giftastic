var topics = ["Cats", "Dogs", "Dancing", "Pigs", "Turtles", "Eagles"];
var apiKey = "7GOfzgZSUZPT7pHGGFd4f2HzXB5ybe3D";
var URL = "http://api.giphy.com/v1/gifs/search?q=" //"funny+cat&api_key=YOUR_API_KEY"
var limit = "&limit=10";
var rating = "&rating=pg&rating=g";


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
                // pulling the rating and appending it to the div
                var rating = gifObject.rating[j];
                var rateText = $("<h2>").text("Rating:" + rating); 
                gifDiv.append(rateText); 
                // pulling the image url and appending it to the div
                var gifs = $("<img>");
                var imgURLstill = gifObject.images.fixed_height_small_still[j];
                gifs.attr("src", imgURLstill);
                gifDiv.append(gifs);

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


}); // document ready close out



console.log(topics[1]);
console.log(topics[3]);




