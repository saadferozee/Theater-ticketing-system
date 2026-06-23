console.log('connected');

// select html objects
const seatContainer = document.getElementById("seat-container");
const bookingForm = document.getElementById("booking-form");
const ticketInput = document.getElementById("ticket-input");

// variable
let bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];

// functions
const generateSeats = () => {
    const rows = ["A", "B", "C", "D"];
    rows.forEach(row => {
        for (let i = 1; i <= 25; i++) {
            const seatNumber = row + i;
            const seat = document.createElement("div");

            seat.classList.add("seat");
            seat.setAttribute('title', 'Click to Select');
            seat.id = seatNumber;

            seat.textContent = seatNumber;

            if (bookedSeats.includes(seatNumber)) {
                seat.classList.add("booked");
            }

            seatContainer.appendChild(seat);
        }
    });
}
const saveToLocalStorage = (bookedSeats) => {
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
}

// Listener
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const seatNumber = ticketInput.value.trim().toUpperCase();
    const seat = document.getElementById(seatNumber);
    
    if (!seat) {
        alert("No Seat Selected");
        ticketInput.value = "";
        return;
    }
    if (seat.classList.contains("booked")) {
        alert("The seat is already booked.");
        ticketInput.value = "";
        return;
    }
    
    seat.classList.add("booked");
    bookedSeats.push(seatNumber);
    
    saveToLocalStorage(bookedSeats);
    
    ticketInput.value = "";
    
});

// calling all function
generateSeats();