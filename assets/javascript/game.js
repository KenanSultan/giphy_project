$(document).ready(function () {
    var animal_array = ['cat', 'penguen', 'dog', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'turtle', 'chinchilla', 'hedgehog', 'chicken', 'frog']

    if (localStorage.getItem("animals")) {
        animal_array = JSON.parse(localStorage.getItem("animals"))
    }

    button_generator()

    function button_generator() {
        $(".buttons").empty()
        for (i in animal_array) {
            let buton = $("<button>").addClass("btn btn-info m-1 animal-btn px-4").text(animal_array[i])
            $(".buttons").append(buton)
        }
    }

    $("form").on("submit", function (event) {
        event.preventDefault()

        var name = $("#name-input").val()
        $("#name-input").val("")

        animal_array.push(name)
        button_generator()

        localStorage.setItem("animals", JSON.stringify(animal_array))
        $(".animal-btn").on("click", click_func )
    })

    $(".animal-btn").on("click", click_func )

    function click_func() {
        $(".gifs").empty()
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search",
            data: {
                api_key: "yafClMX21ePFhAas8bJ1XzJz1rMO5Kn3",
                q: $(this).text(),
                limit: "20"
            }
        }).done(function (resp) {
            console.log(resp)
            for (i in resp.data) {
                let yazi = $("<p>").text("Rating: " + resp.data[i].rating)
                let resim = $("<img>").attr("src", resp.data[i].images.fixed_height.url)
                resim.attr("data-condition", "move")
                resim.attr("data-move", resp.data[i].images.fixed_height.url)
                resim.attr("data-still", resp.data[i].images.fixed_height_still.url)
                
                let gif = $("<div>").addClass("p-2 d-inline-block").append(yazi).append(resim)
                $(".gifs").append(gif)
            }
            $("img").on("click", function() {
                if ($(this).attr("data-condition") == "move") {
                    let src = $(this).attr("data-still")
                    $(this).attr("src", src)
                    $(this).attr("data-condition", "still")
                } else if ($(this).attr("data-condition") == "still") {
                    let src = $(this).attr("data-move")
                    $(this).attr("src", src)
                    $(this).attr("data-condition", "move")
                }  
            })
        })

    }
})