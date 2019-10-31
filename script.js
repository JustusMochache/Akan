function submission() {
  var day = parseInt(document.getElementById("day").value);

  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  // var dob = document.getElementById("date").value;
  // alert(dob);

  var gender = document.getElementById("myForm").elements.namedItem("gender")
    .value;

  var dayOfweek = new Date(year + "/" + month + "/" + day);

  var result = dayOfweek.getDay();

  var validate =
    year > 1990 &&
    year < 2019 &&
    (month > 0 || month < 13) &&
    (day > 0 || day < 32);

  if (day < 1 || day > 31) {
    alert("Invalid Date ,Please Try Again");
  } else if (
    month < 1 ||
    month > 12 ||
    month == NaN ||
    (month == 2 && day > 29)
  ) {
    alert("Invalid Month");
  } else if (year === NaN || year < 1990 || year > 2019) {
    return alert("Invalid year please try Again");
  } else if (validate == false) {
    alert("no input");
  }

  var maleName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleName = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (result === 0 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 1 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 2 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 3 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 4 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 5 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 6 && gender === "male") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      maleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  }

  if (result === 0 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 1 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 2 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 3 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 4 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 5 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  } else if (result === 6 && gender === "female") {
    return (document.getElementById("alert").innerHTML =
      "Your Akan name is : " +
      femaleName[result] +
      ("  .You were born on a : " + daysOfTheWeek[result]));
  }
}
