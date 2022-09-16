const movie = document.getElementById("movie")
let seats = document.querySelectorAll(".seat")
const seatsSelected = document.getElementById("seats-selected")
const price = document.getElementById("total-price")

// Toggle seats
function toggleSeat(seat) {
    
    seat.classList.toggle("selected")
    seatsSelected.innerHTML = document.querySelectorAll(".selected").length

}

// Calculate price
function getPrice() {

    price.innerHTML = seatsSelected.textContent * movie.value

}

// Save to localStorage
function saveLocal() {

    let arrOfSeats = []
    seats.forEach((seat, index) => {

        if (seat.classList.contains("selected")) arrOfSeats.push(index)

    })
    localStorage.setItem("seats-selected", JSON.stringify(arrOfSeats))

}

// Get from local storage
if (localStorage.getItem("seats-selected")) {
    
    let arrOfSeats = JSON.parse(localStorage.getItem("seats-selected"))
    arrOfSeats.forEach((i) => {

        seats[i].classList.add("selected")

    })
    seatsSelected.innerHTML = document.querySelectorAll(".selected").length
    movie.value = localStorage.getItem("movie-value")
    getPrice()

}

// Add event listeners
seats.forEach(seat => {

    seat.addEventListener("click", () => {

        toggleSeat(seat)
        getPrice(seat)
        saveLocal()

    })
    
})
movie.addEventListener("change", () => {

    getPrice()
    localStorage.setItem("movie-value", movie.value)

})