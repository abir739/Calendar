const date = document.getElementById("date");
const day = document.getElementById("day");
const month =  document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

console.log(today);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

date.innerHTML = (today.getDate()<10 ? "0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = Months[ today.getMonth()];
year.innerHTML = today.getFullYear();
