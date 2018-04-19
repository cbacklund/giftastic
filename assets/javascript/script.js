var topics = ["Cats", "Dogs", "Dancing", "Pigs", "Turtles", "Eagles"];
var apiKey = "7GOfzgZSUZPT7pHGGFd4f2HzXB5ybe3D";
var URL = "http://api.giphy.com/v1/gifs/search?q=" //"funny+cat&api_key=YOUR_API_KEY"
var limit = "";
var rating = "";


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

        var queryUrl = URL + gifpic + "&api_key=" + apiKey; 

        console.log(gifpic);
        console.log(queryUrl);

            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function (response) {

                var gifDiv = $("<div>");

                var rating = response
                var rateText = $("<h2>").text("Rating:" + rating); // creating the text for the rating for each gif
                gifDiv.append(rateText); // attaching the rating text to the div

                var imgURLstill = response
                var gifs = $("<img>");

                gifs.attr();

                $("#giphypop").append(gifs);

            }) // response function close out

    }); // buttonRange on click close out
    $("#gifButton").on("click", function (event) {
        event.preventDefault();

        var newStuff = $("#exampleTopic").val().trim();
        topics.push(newStuff);
        createButtons();
    });


}); // document ready close out



console.log(topics[1]);
console.log(topics[3]);




