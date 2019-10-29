function submission() {
  var day = document.getElementById("day").value;

  var dd = parseInt(day);

  var month = document.getElementById("month").value;

  var mm = parseInt(month);

  var year = document.getElementById("year").value;

  var yy = parseInt(year.toString().slice(2, 4));

  var cc = Math.ceil(year / 100);

  var male = document.getElementById("male").checked;

  var female = document.getElementById("female").checked;

  var dayOfweek = new Date(yy + "/" + mm + "/" + dd);

  var result = dayOfweek.getDay();

  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleNames = [
    "Akosua",
    " Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (dd <= 0 || dd > 31) {
    alert("Enter valid day");
  } else if (mm <= 0 || mm > 12) {
    alert("Please enter a valid month");
  } else if (male == true) {
    var dayName = daysOfTheWeek[result];

    var akan_name = maleNames[result];

    alert("Your name is " + akan_name + "and you were born on a " + dayName);
  } else if (female == true) {
    var dayName = daysOfTheWeek[result];

    var akan_name = femaleNames[result];

    alert("Your name is " + akan_name + "and you were born on a " + dayName);
  }
}
