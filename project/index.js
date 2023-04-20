let day = parseInt(document.getElementById("day-input").value);
let month = parseInt(document.getElementById("month-input").value);
let year = parseInt(document.getElementById("year-input").value);
let errorDay = document.getElementById("error-day");
let errorMonth = document.getElementById("error-month");
let errorYear = document.getElementById("error-year");
let calculateButton = document.getElementById("calculate-button");
let spanDay = document.getElementById("span-day");
let spanMonth = document.getElementById("span-month");
let spanYear = document.getElementById("span-year");

let today = new Date();

calculateButton.addEventListener("click", (e) => {
  errorDay.innerText = "";
  errorMonth.innerText = "";
  errorYear.innerText = "";
  if (day == "" || month == "" || year == "") {
    e.preventDefault();
    if (day == "") {
      errorDay.innerText = "this field is required";
    }
    if (month == "") {
      errorMonth.innerText = "this field is required";
    }
    if (year == "") {
      errorYear.innerText = "this field is required";
    }
  } else if (year > today.getFullYear()) {
    e.preventDefault();
    errorYear.innerText = "Must be in the past";
    year = "";
  } else if (month > 12) {
    e.preventDefault();
    errorMonth.innerText = "Must be a valid Month";
    month = "";
  } else if (day > 31) {
    e.preventDefault();
    errorDay.innerText = "must be a valid Day";
    day = "";
  } else {
    Calculator();
  }
});

const Calculator = () => {
  let day = parseInt(document.getElementById("day-input").value);
  let month = parseInt(document.getElementById("month-input").value);
  let year = parseInt(document.getElementById("year-input").value);
  let today = new Date();

  if (month > today.getMonth() + 1) {
    spanYear.innerHTML = today.getFullYear() - year - 1;
  } else if (month == today.getMonth() + 1 && day > today.getDate()) {
    spanYear.innerHTML = today.getFullYear() - year - 1;
  } else {
    spanYear.innerHTML = today.getFullYear() - year;
  }

  if (month > today.getMonth() + 1) {
    spanMonth.innerHTML = 12 + (today.getMonth() + 1 - month);
  } else {
    spanMonth.innerHTML = today.getMonth() + 1 - month;
  }

  if ((day > today.getDate() && month % 2 !== 0) || today.getMonth() + 1 == 8) {
    spanDay.innerHTML = 31 - (day - today.getDate());
  } else if (
    (day < today.getDate() && month % 2 !== 0) ||
    today.getMonth() + 1 == 8
  ) {
    spanDay.innerHTML = 31 + (day - today.getDate());
  } else if (
    day > today.getDate() &&
    month % 2 == 0 &&
    today.getMonth() + 1 !== 8
  ) {
    spanDay.innerHTML = 30 - (day - today.getDate());
  } else if (
    day < today.getDate() &&
    month % 2 == 0 &&
    today.getMonth() + 1 !== 8
  ) {
    spanDay.innerHTML = -(day - today.getDate());
  }
};
