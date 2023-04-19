let calculateButton = document.getElementById("calculate-button");
let spanDay = document.getElementById("span-day");
let spanMonth = document.getElementById("span-month");
let spanYear = document.getElementById("span-year");

const Calculator = () => {
  let day = document.getElementById("day-input").value;
  let month = document.getElementById("month-input").value;
  let year = document.getElementById("year-input").value;

  let birthDate = new Date(year, month - 1, day);
  let today = new Date();

  let diff = today.getTime() - birthDate.getTime();
  let age = {};
  age.years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  age.months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  age.days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  spanYear.innerHTML = age.years;
  spanMonth.innerHTML = age.months;
  spanDay.innerHTML = age.days;
};

calculateButton.addEventListener("click", Calculator);
