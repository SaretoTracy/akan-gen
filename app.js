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

const femaleNames = ["Akosua, Adwoa ,Abenaa, Akua, Yaa, Afua, Ama"];
const maleNames = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"];
const weekDays = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];
const months = ["January, Febuary , March, April, June, July, August, September, October, November, December"];


/**data collection */
let form = document.querySelector(".form")
let birthYear = document.querySelector(".year");
let birthMonth = document.querySelector(".month");
let birthDate = document.querySelector(".date");
let gender = document.querySelector("#gender");
let generatebtn = document.querySelector("#generate_Btn")


/**data collection input*/
let dataInput = (birthYear, birthMonth, birthDate) => {
    if (birthYear === null) {
        alert("Please enter Year")
    } else if (birthYear <= 0 || birthYear.length > 4) {
        alert("Invalid Year")
    }
    if (birthMonth === null) {
        alert("please enter Month")
    } else if (birthMonth <= 0 || birthMonth > 12) {
        alert("Invalid Month")
    }
    if (birthDate === null) {
        alert("please enter birthDate")
    } else if (birthDate <= 0 || birthDate >= 32) {
        alert("Invalid Date")
    }

}

function getGender() {
    if (gender.checked) {
        return gender.value;
    }
}
let genderInput = getGender();
/**generate formula (Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7) */

let CC = (Math.floor(birthYear / 100));
let YY = parseInt(birthYear.slice(-2));
let MM = [parseInt(birthMonth) - 1];
let DD = parseInt(birthDate);


form.addEventListener("submit", function() {

})