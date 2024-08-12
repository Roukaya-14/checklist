const numbers = document.querySelectorAll(".number");
const button = document.querySelector("button");
let currentRate = 0;
//numbers[0].addEventListener("click", function click() {
//  numbers[0].style.backgroundColor = "white";
// numbers[0].style.color = "orange";
// numbers[1].style.backgroundColor = "orange";
// numbers[1].style.color = "white";

//});
//numbers[1].addEventListener("click", function click() {
// numbers[1].style.backgroundColor = "white";
//  numbers[1].style.color = "orange";
//  numbers[0].style.backgroundColor = "orange";
//  numbers[0].style.color = "white";
//});
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    num.addEventListener("click", function click() {
        console.log(num);
        currentRate = num.textContent;
        if (num.classList.contains("inactive-number")) {
            num.classList.remove("inactive-number");
            num.classList.add("active-number");
        } else {
            num.classList.remove("active-number");
            num.classList.add("inactive-number");
        }
    });
}


const ratingContainer = document.querySelector(".rating-component");
const thanksContainer = document.querySelector(".thanks-component");
ratingContainer.style.display = "flex";
thanksContainer.style.display = "none";
button.addEventListener("click", function click() {
    if (currentRate !== 0) {
        ratingContainer.style.display = "none";
        thanksContainer.style.display = "flex";
    }
});


//  num.style.backgroundColor = "white";
//num.style.color = "orange";
//  });
//}