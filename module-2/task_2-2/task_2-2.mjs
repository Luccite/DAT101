"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + 3 * (2 - 4) * 6";

const part1Answer = 2 + 3 * (2 - 4) * 6;

printOut(orgMatExp);
printOut(newMathExp);
printOut(part1Answer);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const oneInch = 25.4 // millineters
const metersInMillimeters = 25 * 1000;
const centimetersInMillimeters = 34 * 10;

const millimeters = metersInMillimeters + centimetersInMillimeters
const inches = milliemeters / oneIInch;

PrintOut(`25 meters and 34 centimeters = ${Inches.toFixed(2)} Inches`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);

printOut (`3 days, 12 hours, 14 minutes and 45 seconds = ${part3Answer} minutes`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalMinutes = 6322.52;
let remainder;

// Steg 1 - Dager
const totalDays = totalMinutes / (24 * 60);
const days = Math.floor(totalDays);

remainder = totalDays - days;
// Steg 2 - Timer
const totalHours = remainder * 24;
const hours = Math.floor(totalHours);

remainder = totalHours - hours;
// Steg 3 - Minutter
const totalMinutesLeft = remainder * 60;
const minutes = Math.floor(totalMinutesLeft);

remainder = totalMinutesLeft - minutes;

// Steg 4 - Sekunder
const totalSeconds = remainder * 60;
const seconds = Math.floor(totalSeconds);

printOut(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollars = 54;

const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const nokAnswer = Math.round(dollars*nokRate);
const usdAnswer = Math.round(nokAnswer*usdRate);

printOut(`$${dollars} USD = ${nokAnswer} NOK`);
printOut(`$${nokAnswer} NOK = ${usdAnswer} USD`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "There is much between heaven and earth that we do not understand.";

printOut(`Number of characters: ${text.length}`);

printOut(`Character at position 19: ${text.substring(35, 43)}`);

printOut(`"earth" starts at index: ${text.indexOf("earth")}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut (`5 > 3 = ${5 > 3}`);

printOut (`7 >= 7 = ${7 >= 7}`);

printOut (`"a" > "b" = ${"a" > "b"}`);

printOut (`"1" < "a" = ${"1" < "a"}`);

printOut (`"2500" < "abcd" = ${"2500" < "abcd"}`);

printOut (`"arne" !== "thomas" = ${"arne" !== "thomas"}`);

printOut (`2 === 5 = ${2 === 5}`);

printOut (`!("abcd" > "bcd") = ${!("abcd" > "bcd")}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut (`Number("254") = ${Number("254")}`);

printOut (`Number("57.23") = ${Number("57.23")}`);

printOut (`Number("25 kroner") = ${Number("25 kroner")}`);

printOut (`parseInt ("25 kroner") = ${parseInt("25 kroner")}`);

printOut (`parseFloat ("57.23 kroner") = ${parseFloat("57.23 kroner")}`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;

printOut(`Random number: ${r}`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part10totalDays = 131;

const part10weeks = Math.floor(part10totalDays / 7);
const part10days = part10totalDays % 7;

printOut(`${part10totalDays} days = ${part10weeks} weeks and ${part10days} days`);

printOut(newLine);