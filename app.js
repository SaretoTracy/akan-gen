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
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febuary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];


/**data collection */
let form = document.querySelector(".form")
let birthYear = document.querySelector(".year");
let birthMonth = document.querySelector(".month");
let birthDate = document.querySelector(".date");
let genderFemale = document.querySelector("#female");
let genderMale = document.querySelector("#male");





form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(birthYear.value);
    console.log(birthMonth.value);
    console.log(birthDate.value);

    validation();
    generate();

})

/**data collection input*/
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

/**
generate formula (Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7) */

function generate() {

    let CC = (Math.floor(birthYear.value / 100));
    console.log(CC)
    let YY = parseInt(birthYear.value.slice(2, 4));
    console.log(YY)
    let MM = [parseInt(birthMonth.value) - 1];
    console.log(MM)
    let DD = parseInt(birthDate.value);
    console.log(DD)




    // if ((((CC === 6 && YY === 0) || (YY % 4 === 0 && YY !== 0)) && ((birthMonth - 1) <= 1))) {
    //     //leap year
    //     dayOfBirthIndex = (MM + CC + DD - 1) % 7;

    // } else {
    //     //ordinary year
    //     dayOfBirthIndex = (DD + MM + CC + YY + Math.floor(YY / 4)) % 7
    // }


    // console.log(dayOfBirthIndex)


}