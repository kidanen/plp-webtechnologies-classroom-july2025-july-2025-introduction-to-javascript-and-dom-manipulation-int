// =========================
// Part 1: Basics
// =========================

// Example of variables, conditionals, and console output
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// DOM-based greeting using conditionals
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const greetingEl = document.getElementById("greeting");

  if (name.trim() !== "") {
    greetingEl.textContent = `Hello, ${name}! 🎉`;
  } else {
    greetingEl.textContent = "Please enter your name!";
  }
});

// =========================
// Part 2: Functions
// =========================

// Function to calculate square of a number
function square(num) {
  return num * num;
}

// Function to format a string (capitalize first letter)
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log("Square of 5:", square(5));
console.log("Capitalized:", capitalize("javascript"));

// =========================
// Part 3: Loops
// =========================

// Multiplication table generator using loop
function generateTable(num) {
  let results = [];
  for (let i = 1; i <= 10; i++) {
    results.push(`${num} x ${i} = ${num * i}`);
  }
  return results;
}

// Display table in DOM
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", () => {
  const number = parseInt(document.getElementById("numberInput").value);
  const outputEl = document.getElementById("tableOutput");
  outputEl.innerHTML = ""; // clear previous

  if (!isNaN(number)) {
    const table = generateTable(number);
    table.forEach(row => {
      const li = document.createElement("li");
      li.textContent = row;
      outputEl.appendChild(li);
    });
  } else {
    outputEl.innerHTML = "<li>Please enter a valid number.</li>";
  }
});

// Countdown with while loop (console output)
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// =========================
// Part 4: DOM Manipulation
// =========================

let clickCount = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

counterBtn.addEventListener("click", () => {
  clickCount++;
  counterDisplay.textContent = `Clicks: ${clickCount}`;
  counterDisplay.style.color = clickCount % 2 === 0 ? "green" : "red"; // toggle color
});
