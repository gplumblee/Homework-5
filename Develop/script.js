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

let day = d.getDay();
let date = d.getDate();
let month = d.getMonth(); // Since getMonth() returns month from 0-11 not 1-12
let year = d.getFullYear();

let dateStr = days[day] + ", " + months[month] + " " + date + ", " + year;
let today = d.toLocaleString();
document.getElementById("currentDay").innerHTML = dateStr;

// The next step is to set each description box with the current time stamp so that they can be color coded. 
// (Also, these rows need a slight border on them.)
// Then, somehow trigger the background color to change from .future to .present or .past depending on the current time.