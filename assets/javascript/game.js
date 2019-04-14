var animal_array = []

if (localStorage.getItem("animals")) {
    animal_array = JSON.parse(localStorage.getItem("animals"))
}

button_generator()

function button_generator() {
    for (i in animal_array) {
        let buton = $("<button>").addClass("btn btn-info m-1").text(animal_array[i])
        $(".buttons").append(buton)
    }
}

$("form").on("submit", function(event) {
    event.preventDefault()

    var name = $("#name-input").val()
    $("#name-input").val("")
    let buton = $("<button>").addClass("btn btn-info m-1").text(name)
    $(".buttons").append(buton)

    animal_array.push(name)
    localStorage.setItem("animals", JSON.stringify(animal_array))
})