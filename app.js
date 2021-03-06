const generate_btn = document.querySelector("#generatebtn");
const cancel_btn = document.querySelector(".cancel");
const front = document.querySelector(".front");
const next = document.querySelector(".next");


generate_btn.addEventListener("click", () => {
    front.classList.add("display")
    next.classList.remove("display")
});
cancel_btn.addEventListener("click", () => {
    front.classList.remove("display")
    next.classList.add("display")
});

/**Akan name js */

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame "];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];


/**data collection input*/
let form = document.querySelector(".form")
let birthYear = document.querySelector(".year");
let birthMonth = document.querySelector(".month");
let birthDate = document.querySelector(".date");
let genderFemale = document.querySelector("#female-check")
let genderMale = document.querySelector("#male-check")
let outcome = document.getElementById("outcome");




form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(birthYear.value);
    console.log(birthMonth.value);
    console.log(birthDate.value);






    validation();
    generate();


})

/**data collection input Validation*/
function validation() {
    if (birthYear.value === null) {
        alert("Please enter Year")
    } else if (birthYear.value <= 0 || birthYear.value.length > 4) {
        alert("Invalid Year")
    }
    if (birthMonth.value === null) {
        alert("please enter Month")
    } else if (birthMonth.value <= 0 || birthMonth.value > 12) {
        alert("Invalid Month")
    }

    if (birthDate.value === null) {
        alert("please enter birthDate")
    } else if (birthDate.value <= 0 || birthDate.value >= 32) {
        alert("Invalid Date")
    }
    if (birthMonth.value === 2 && (birthYear.value) % 4 === 0) {
        if (birthDate > 28 || birthDate < 1) {
            alert("Invalid Date")
        } else if (birthMonth.value === 2 && birthDate.value > 29) {
            alert("Invalid Date")
        }
    }
}



function generate() {

    let CC = parseInt(birthYear.value.slice(0, 2));
    console.log(CC)
    let YY = parseInt(birthYear.value.slice(2, 4));
    console.log(YY)
    let MM = parseInt(birthMonth.value);
    console.log(MM)
    let DD = parseInt(birthDate.value);
    console.log(DD)

    let dayoftheWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD)) % 7
        // let dayoftheWeek = (DD + MM + CC + YY + Math.floor(YY / 4)) % 7
    console.log(dayoftheWeek)

    /**getting exact day of birth */
    let day;
    if (dayoftheWeek == 0) {
        day = 6
    } else {
        day = Math.abs(dayoftheWeek - 1)
    }

    console.log(weekDay[day]);
    /**Generating Day of birth and Akan name */
    let name;
    if (genderFemale.checked) {
        outcome.innerHTML = "You were born on a " + weekDay[day] + " , your Akan name is " + femaleNames[day];
    } else if (genderMale.checked) {
        outcome.innerHTML = "You were born on a " + weekDay[day] + " , your Akan name is " + maleNames[day];
    }

    document.getElementById("frm").reset()



}