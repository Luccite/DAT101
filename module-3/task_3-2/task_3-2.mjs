"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
let countDown = "";

for (let i = 1; i <= 10; i++) {
countUp += i + " ";
}

for (let i = 10; i >= 1; i--) {
countDown += i + " ";
}

printOut(countUp);
printOut(countDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumber = 45;

let guess = 0;

while (guess !== secretNumber) {
guess = Math.floor(Math.random() * 60) + 1;
}

printOut(`Guessed number: ${guess}`);
``

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetNumber = 500000;

let guessedTarget = 0;
let numberOfGuesses = 0;

const startTime = Date.now();

while (guessedTarget !== targetNumber) {
guessedTarget = Math.floor(Math.random() * 1000000) + 1;
numberOfGuesses++;
}

const endTime = Date.now();

printOut(`Guess: ${guessedTarget}`);
printOut(`Attempts: ${numberOfGuesses}`);
printOut(`Milliseconds: ${endTime - startTime}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let number = 2; number < 200; number++) {

let divisor = 2;
let isPrime = true;

while (divisor < number) {

if (number % divisor === 0) {
isPrime = false;
break;
}

divisor++;
}

if (isPrime) {
printOut(number);
}
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {

let line = "";

for (let column = 1; column <= 9; column++) {
line += `K${column}R${row} `;
}

printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student = 1; student <= 5; student++) {

const points = Math.floor(Math.random() * 236) + 1;

const percent = (points / 236) * 100;

let grade;

if (percent >= 89) {
grade = "A";
}
else if (percent >= 77) {
grade = "B";
}
else if (percent >= 65) {
grade = "C";
}
else if (percent >= 53) {
grade = "D";
}
else if (percent >= 41) {
grade = "E";
}
else {
grade = "F";
}

printOut(`Student ${student}: ${points} points = ${grade}`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let throwsStraight = 0;
let found = false;

while (!found) {

throwsStraight++;

let dice = [];

for (let i = 0; i < 6; i++) {
dice.push(Math.floor(Math.random() * 6) + 1);
}

dice.sort();

if (dice.join(",") === "1,2,3,4,5,6") {
found = true;
}
}

printOut(`Full Straight found after ${throwsStraight} throws`);

printOut(newLine);
