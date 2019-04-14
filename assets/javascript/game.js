var animal_array = []

if (localStorage.getItem("animals")) {
    animal_array = JSON.parse(localStorage.getItem("animals"))
}

button_generator()

function button_generator() {
    for (i in animal_array) {
        let buton = $("<button>").addClass("btn btn-info m-1 animal-btn").text(animal_array[i])
        $(".buttons").append(buton)
    }
}

$("form").on("submit", function (event) {
    event.preventDefault()

    var name = $("#name-input").val()
    $("#name-input").val("")
    let buton = $("<button>").addClass("btn btn-info m-1 animal-btn").text(name)
    $(".buttons").append(buton)

    animal_array.push(name)
    localStorage.setItem("animals", JSON.stringify(animal_array))
})

$(".animal-btn").on("click", function () {
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
            let gif = $("<div>").addClass("p-2 d-inline-block").append(yazi).append(resim)
            $(".gifs").append(gif)  
        }
        
    })
})