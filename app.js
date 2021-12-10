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
const months = ["January, Febuary , March, April, June, July, August, September, October, November, December"]