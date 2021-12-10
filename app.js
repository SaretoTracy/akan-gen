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

const femaleNames = ["Akosua, Adwoa ,Abenaa, Akua, Yaa, Afua, Ama"];
const maleNames = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"];
const weekDays = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
const months = ["January, Febuary , March, April, June, July, August, September, October, November, December"];


/**data collection */
let birthYear = document.querySelector(".year");
let birthMonth = document.querySelector(".month");
let birthDate = document.querySelector(".date");
let birthYear = document.querySelector("#gender");


/**data collection input*/
let dataInput = (year, month, date) => {
    if (year === null) {
        alert("Please enter year")
    } else if (year <= 0 || year.length > 4) {
        alert("Invalid Year")
    }
    if (month === null) {
        alert("please enter month")
    } else if (date <= 0 || date > 12) {
        alert("Invalid Date")
    }
    if (date === null) {
        alert("please enter date")
    } else if (date <= 0 || date >= 32) {
        alert("Invalid Date")
    }

}