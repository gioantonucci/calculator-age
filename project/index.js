//BUTTON
let calculateButton = document.getElementById("calculate-button");

const Calculator = () => {
  let today = new Date();
  //INPUTS
  let day = parseInt(document.getElementById("day-input").value);
  let month = parseInt(document.getElementById("month-input").value);
  let year = parseInt(document.getElementById("year-input").value);
  //ERROR MESSAGGES
  let errorDay = document.getElementById("error-day");
  let errorMonth = document.getElementById("error-month");
  let errorYear = document.getElementById("error-year");
  //RESPONSES
  let spanDay = document.getElementById("span-day");
  let spanMonth = document.getElementById("span-month");
  let spanYear = document.getElementById("span-year");

  errorDay.innerText = "";
  errorMonth.innerText = "";
  errorYear.innerText = "";

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

calculateButton.addEventListener("click", Calculator);
