"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
const timeBuss = 7;
const timeTrain = 8;
const wakeUpTime = 8;

if (wakeUpTime === timeBuss) {
printOut("Take the bus!");
}
else if (wakeUpTime === timeTrain) {
printOut("Take the train!");
}
else {
printOut("Take the car!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number = 0;

if (number > 0) {
printOut("Positive");
}
else if (number < 0) {
printOut("Negative");
}
else {
printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;

printOut(`Image size: ${imageSize} MP`);

if (imageSize >= 4) {
printOut("Thank you");
}
else {
printOut("The image is too small");
}
``

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;

printOut(`Image size: ${imageSize} MP`);

if (imageSize >= 6) {
printOut("Image is too large");
}
else if (imageSize >= 4) {
printOut("Thank you");
}
else {
printOut("The image is too small");
}
``

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = [
"January",
"February",
"Mars",
"April",
"Mai",
"Jun",
"Juli",
"August",
"September",
"October",
"November",
"December"
];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(`Month: ${monthName}`);

if (monthName.includes("r")) {
printOut("You must take vitamin D");
}
else {
printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysInMonth;

if (
monthName === "January" ||
monthName === "Mars" ||
monthName === "Mai" ||
monthName === "Juli" ||
monthName === "August" ||
monthName === "October" ||
monthName === "December"
) {
daysInMonth = 31;
}
else if (monthName === "February") {
daysInMonth = 28;
}
else {
daysInMonth = 30;
}

printOut(`${monthName} has ${daysInMonth} days`);
``

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "April") {
printOut("The gallery is open in temporary premises.");
}
else if (monthName === "Mars" || monthName === "Mai") {
printOut("The gallery is closed for refurbishment.");
}
else {
printOut("The gallery is open.");
}

printOut(newLine);
