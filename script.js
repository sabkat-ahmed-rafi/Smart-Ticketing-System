//Declaring global variables 
let totalPrice =  0; 
let grandTotalPrice = 0;
let seatLeft = 40;
let totalSeat = 0;
let clickCount = 0;
let seatCount = 0;
let couponInputValue = "";
let paragraphCount = 0;


// Setting scroll button system
const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");

// Add click event listener to the button
scrollButton.addEventListener("click", function() {
    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
});


// alert function for more than 4 seats.
function giveAlert(clickCount) {
    if(clickCount > 4) {
        alert("You Can't Buy More than 4 seats")
    }
}

// Selecting all seats.
let allSeat = document.querySelectorAll(".seat-buttons");
for(let seat of allSeat){
    seat.addEventListener("click", function(event) {
        // Increamenting total price for per seat by selecting.
        totalPrice = totalPrice + 550;

        // Changing color for each clicked button.
        seat.classList.add("bg-[#1DD100]")

        // setting the total price to the total price area and grand total area.
        if(totalPrice > 2200 || grandTotalPrice > 2200) {
            totalPrice = 2200
        }
        document.getElementById("total-price").innerText = totalPrice;
        document.getElementById("grand-total").innerText = totalPrice;

        // giving alert for more selecting more than 4 seats.
        clickCount++;
        giveAlert(clickCount);
        if(clickCount > 4) {
            seat.classList.remove("bg-[#1DD100]")
        }

        // Showing how many seats are selected.
        seatCount++;
        if(seatCount > 4) {
            seatCount = 4;
        }
        if(seatCount >= 4) {
            document.getElementById("coupon-button").removeAttribute("disabled")
        }
        document.getElementById("seat-count").innerText = seatCount;

        // Decreasing total seat left after selecting per seat.
        seatLeft--;
        if(seatLeft < 36) {
            seatLeft = 36;
        }
        document.getElementById("seat-left").innerText = seatLeft;


    // Displaying which tickets are selected.
       if(paragraphCount < 4) {

        let buttonName = seat.getAttribute("id");
       let displayButton = document.getElementById("display-button")
       let p = document.createElement('p')
       p.innerHTML = buttonName + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Economy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;550"
       displayButton.appendChild(p);
       displayButton.appendChild(document.createElement("br"))
       paragraphCount++;
       }  
    })
}

 // Setting coupon section.
 document.getElementById('coupon-button').addEventListener("click", function() {
    let inputValue = document.getElementById("coupon-input").value;
    if(inputValue == "NEW15") {
        grandTotalPrice = 2200 - (2200 * 15) /100
        document.getElementById("grand-total").innerText = grandTotalPrice;
    } else if(inputValue =="couple20") {
        grandTotalPrice = 2200 - (2200 * 20) /100
        document.getElementById("grand-total").innerText = grandTotalPrice;
    }
})

// Setting the visibility of Next Button.
document.getElementById("user-number").addEventListener("keyup", function(event) {
    let userNumber = document.getElementById("user-number").value;
    let newUserNumber = parseInt(userNumber);

    if (!isNaN(newUserNumber)) {
        document.getElementById("next-button").removeAttribute("disabled");
    } else {
        document.getElementById("next-button").setAttribute("disabled", "disabled");
    }
});