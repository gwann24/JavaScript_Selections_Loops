console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 101; i++) {
    if (i % 2 != 0) {
        console.log(i);
    };
};
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 101; i++) {
    let result = "";
    if (i % 3 == 0) {
        result += "FIZZ";
    };
    if (i % 5 == 0) {
        result += "BUZZ";
    };
    if (result != "") {
        result = i + "/" + result;
        console.log(result);
    };
};
// Exercise 3 Section
console.log("EXERCISE 3.1:\n==========\n");
let i = 1;
while (i < 101) {
    if (i % 2 != 0) {
        console.log(i);
    };
    i++;
};
console.log("EXERCISE 3.2:\n==========\n");
i = 1;
do {
    if (i % 2 != 0) {
        console.log(i);
    };
    i++;
} while (i < 101);
console.log("EXERCISE 3.3:\n==========\n");
i = 1;
while (i < 101) {
    let result = "";
    if (i % 3 == 0) {
        result += "FIZZ";
    };
    if (i % 5 == 0) {
        result += "BUZZ";
    };
    if (result != "") {
        result = i + "/" + result;
        console.log(result);
    };
    i++;
};
console.log("EXERCISE 3.4:\n==========\n");
i = 1;
do {
    let result = "";
    if (i % 3 == 0) {
        result += "FIZZ";
    };
    if (i % 5 == 0) {
        result += "BUZZ";
    };
    if (result != "") {
        result = i + "/" + result;
        console.log(result);
    };
    i++;
} while (i < 101);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));          // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);  // creates a random number between 100 and 500
let found = false;
console.log(value);
console.log(n);
for (let i = 0; i <= n; i++) {
    if (i == value) {
        found = true;
        console.log("Found value!");
        break;
    };
};
if (!found) {
    console.log("Did not find value");
};

// Exercise 5 (Bonus) Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1);       // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100);   // creates a random number between 100 and 1000
console.log(fizzDivisor);
console.log(buzzDivisor);
console.log(start);
console.log(end);
for (let i = start; i < end; i++) {
    let result = "";
    if (i % fizzDivisor == 0) {
        result += "FIZZ";
    };
    if (i % buzzDivisor == 0) {
        result += "BUZZ";
    };
    if (result != "") {
        result = i + "/" + result;
        console.log(result);
    };
};