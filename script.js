/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

// The first thing is to get the current day displayed at the top of the calendar.
// To do this I set up a header with an ID of "day-date".
// Create variables for the day and date function (check Mozilla for how to get this).
// Set the InnerHTML of the "day-date" header to these variables.

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
let d = new Date();

let hour = d.getHours();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let dateStr = days[day] + ", " + months[month] + " " + date + ", " + year;
let today = d.toLocaleString();
document.getElementById("currentDay").innerHTML = dateStr;

// The next step is to set each row with the current time stamp so that the description boxes can be color coded. 
// Then, somehow trigger the background color to change from .future to .present or .past depending on the current time.
//     If the hour class is less than current hour,
//         assign the description column to past.
//     If the hour class is equal to the current hour,
//         assign the description column to present.
//     If the hour class is greater than the current hour,
//         assign the description column to future.

let hours = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]
for (i = 0; i < hours.length; i++) {
  $(".container").append(`<div class="row">
<div id="hour${i}" class="col-2 time-block hour">${hours[i]}</div>
<textarea class="col-8 description ${hour<(i+9)?"past": hour=== i+9 ? "present": "future"}">${localStorage.getItem(`hour${i}`) || ""}</textarea>
<div class="col-2 saveBtn btn btn-primary" data-toggle="saveBtn i:hover"></div>
</div>`)
};

$(".saveBtn").on("click", function () {
  let todo = $(this).siblings("textarea").val().trim()
  let key = $(this).siblings(".hour").attr("id")
  console.log(key, todo)
  localStorage.setItem(key, todo);
})

// Trigger the save button to change to hover state when hovered.