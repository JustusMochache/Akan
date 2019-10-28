function submission()
var dd = parseInt(document.getElementById("day").value);
var mm = parseInt(document.grtElementById("month").value);
var yy = parseInt(document.getElementById("year").value);
var male = parseInt(document.getElementById("malegender"));
var male = parseInt(document.getElementById("femalegender"));

var malegender = document.getElementById("malegender");
var femalegender = document.getElementById("femalegender");

var date = new Date(yy + "/" + mm + "/" + dd);
var result = date.getDay();

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
  "Ama"];
   
  var days = [
    "Sunday",
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (malegender.checked){
    alert("Your Akan name result is " + maleNames[result] + "you were born on" + days[result]);
  }
 
  else  {alert("Your Akan name result is " + femaleNames[result] + "you were born on" + days[result]);
}


  
  

