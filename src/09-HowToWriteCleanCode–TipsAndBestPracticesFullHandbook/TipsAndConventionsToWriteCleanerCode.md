# How to Write Clean Code – Tips and Best Practices (Full Handbook)

**Author:** Germán Cocca

## Introduction

Hi everyone! In this handbook, we'll delve into the art of writing "clean" code. The concept of clean code might seem nuanced, but we'll explore its meaning, significance, and how to assess whether a codebase adheres to cleanliness. Additionally, we'll discuss best practices and conventions that can help you craft cleaner code.

Let's get started!

## Table of Contents

- [How to Write Clean Code – Tips and Best Practices (Full Handbook)](#how-to-write-clean-code--tips-and-best-practices-full-handbook)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [What Does It Mean to Write "Clean Code" and Why Should I Care?](#what-does-it-mean-to-write-clean-code-and-why-should-i-care)
  - [How Can I Assess Whether a Codebase is Clean or Not?](#how-can-i-assess-whether-a-codebase-is-clean-or-not)
  - [Tips and Conventions to Write Cleaner Code](#tips-and-conventions-to-write-cleaner-code)
    - [Effectiveness, Efficiency, and Simplicity](#effectiveness-efficiency-and-simplicity)
    - [Format and Syntax](#format-and-syntax)
    - [Naming](#naming)
    - [Conciseness versus Clarity](#conciseness-versus-clarity)
    - [Reusability](#reusability)
    - [Clear Flow of Execution](#clear-flow-of-execution)
    - [Single Responsibility Principle](#single-responsibility-principle)
    - [Having a "Single Source of Truth"](#having-a-single-source-of-truth)
    - [Only Expose and Consume Data You Need](#only-expose-and-consume-data-you-need)
    - [Modularization](#modularization)
    - [Folder Structures](#folder-structures)
  - [Bad Folder Structure](#bad-folder-structure)
  - [Good Folder Structure](#good-folder-structure)
    - [Documentation](#documentation)
  - [Wrapping Up](#wrapping-up)

## What Does It Mean to Write "Clean Code" and Why Should I Care?

Clean code is a term used to describe computer code that is easy to read, understand, and maintain. It is written in a way that makes it simple, concise, and expressive, following a set of conventions, standards, and practices.

Read more about the importance of clean code in [this section](#what-does-it-mean-to-write-clean-code-and-why-should-i-care).

## How Can I Assess Whether a Codebase is Clean or Not?

Assessing clean code involves various factors, including documentation, consistent formatting, and a well-organized codebase. Learn more about evaluating clean code in [this section](#how-can-i-assess-whether-a-codebase-is-clean-or-not).

## Tips and Conventions to Write Cleaner Code

### Effectiveness, Efficiency, and Simplicity

Prioritize effectiveness, efficiency, and simplicity when implementing new features or solving problems. Understand more about these concepts in [this section](#effectiveness-efficiency-and-simplicity).

```js
// Inefficient Example
function sumArrayInefficient(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Efficient example
function sumArrayEfficient(array) {
  return array.reduce((a, b) => a + b, 0);
}
```

### Format and Syntax

Consistent formatting and syntax enhance code readability. Learn about the importance of indentation, spacing, and syntax in [this section](#format-and-syntax).

```js
// bad indentation and spacing
const myFunc=(number1,number2)=>{
const result=number1+number2;
return result;
}

// good indentation and spacing
const myFunc = (number1, number2) => {
    const result = number1 + number2
    return result
}

// Arrow function, no colons, no return
const multiplyByTwo = number => number * 2

// Function, colons, return
function multiplyByThree(number) {
    return number * 3;
}

// bad indentation and spacing
const myFunc=(number1,number2)=>{
const result=number1+number2;
return result;
}

// good indentation and spacing
const myFunc = (number1, number2) => {
    const result = number1 + number2
    return result
}

// camelCase
const myName = 'John'
// PascalCase
const MyName = 'John'
// snake_case
const my_name = 'John'
```

### Naming

Descriptive and clear naming of variables and functions contributes to code readability. Explore the significance of naming conventions [here](#naming).

```js
// Example 1: Poor Naming
function ab(a, b) {
  let x = 10;
  let y = a + b + x;
  console.log(y);
}

ab(5, 3);


// Example 1: Good Naming
function calculateTotalWithTax(basePrice, taxRate) {
  const BASE_TAX = 10;
  const totalWithTax = basePrice + (basePrice * (taxRate / 100)) + BASE_TAX;
  console.log(totalWithTax);
}

calculateTotalWithTax(50, 20);
```

### Conciseness versus Clarity

Strike a balance between conciseness and clarity to ensure code readability. Delve into the details of this balance [here](#conciseness-versus-clarity).

```js
// Example 1: Concise function
const countVowels = s => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello world"));

// Example 2: More verbose and clearer function
function countVowels(s) {
  const vowelRegex = /[aeiou]/gi;
  const matches = s.match(vowelRegex) || [];
  return matches.length;
}

console.log(countVowels("hello world"));

```

### Reusability

Code reusability is crucial for efficient software development. Understand the importance and implementation of reusability in [this section](#reusability).

```js
// Example 1: No re-usability
function calculateCircleArea(radius) {
  const PI = 3.14;
  return PI * radius * radius;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

const circleArea = calculateCircleArea(5);
const rectangleArea = calculateRectangleArea(4, 6);
const triangleArea = calculateTriangleArea(3, 7);

console.log(circleArea, rectangleArea, triangleArea);


// Example 2: Implementing re-usability
function calculateArea(shape, ...args) {
  if (shape === 'circle') {
    const [radius] = args;
    const PI = 3.14;
    return PI * radius * radius;
  } else if (shape === 'rectangle') {
    const [length, width] = args;
    return length * width;
  } else if (shape === 'triangle') {
    const [base, height] = args;
    return (base * height) / 2;
  } else {
    throw new Error(`Shape "${shape}" not supported.`);
  }
}

const circleArea = calculateArea('circle', 5);
const rectangleArea = calculateArea('rectangle', 4, 6);
const triangleArea = calculateArea('triangle', 3, 7);

console.log(circleArea, rectangleArea, triangleArea);

```

### Clear Flow of Execution

A clear flow of execution is essential for code readability. Learn how to achieve this clarity [here](#clear-flow-of-execution).

```js
// Example 1: Clear flow of execution
function calculateDiscount(price, discountPercentage) {
  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscount(originalPrice, discountPercentage);

console.log(finalPrice);

// Example 2: Spaghetti code
const originalPrice = 100;
const discountPercentage = 20;

let discountedPrice;
let discountAmount;
if (originalPrice && discountPercentage) {
  discountAmount = originalPrice * (discountPercentage / 100);
  discountedPrice = originalPrice - discountAmount;
}

if (discountedPrice) {
  console.log(discountedPrice);
}
```

### Single Responsibility Principle

Apply the Single Responsibility Principle (SRP) to create maintainable and understandable code. Explore SRP in [this section](#single-responsibility-principle).

```js
// Example 1: Withouth SRP
function processOrder(order) {
  // validate order
  if (order.items.length === 0) {
    console.log("Error: Order has no items");
    return;
  }

  // calculate total
  let total = 0;
  order.items.forEach(item => {
    total += item.price * item.quantity;
  });

  // apply discounts
  if (order.customer === "vip") {
    total *= 0.9;
  }

  // save order
  const db = new Database();
  db.connect();
  db.saveOrder(order, total);
}


// Example 2: With SRP
class OrderProcessor {
  constructor(order) {
    this.order = order;
  }

  validate() {
    if (this.order.items.length === 0) {
      console.log("Error: Order has no items");
      return false;
    }
    return true;
  }

  calculateTotal() {
    let total = 0;
    this.order.items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  applyDiscounts(total) {
    if (this.order.customer === "vip") {
      total *= 0.9;
    }
    return total;
  }
}

class OrderSaver {
  constructor(order, total) {
    this.order = order;
    this.total = total;
  }

  save() {
    const db = new Database();
    db.connect();
    db.saveOrder(this.order, this.total);
  }
}

const order = new Order();
const processor = new OrderProcessor(order);

if (processor.validate()) {
  const total = processor.calculateTotal();
  const totalWithDiscounts = processor.applyDiscounts(total);
  const saver = new OrderSaver(order, totalWithDiscounts);
  saver.save();
}
```

### Having a "Single Source of Truth"

Maintain a single source of truth for data or configurations to avoid duplication and inconsistency. Read more about this concept [here](#having-a-single-source-of-truth).

```js
// Option 1: No "single source of truth"

// file 1: weatherAPI.js
const apiKey = '12345abcde';

function getCurrentWeather(city) {
  return fetch(`https://api.weather.com/conditions/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

// file 2: weatherComponent.js
const apiKey = '12345abcde';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}


// Option 2: "Single source of truth"

// file 1: weatherAPI.js
const apiKey = '12345abcde';

function getCurrentWeather(city) {
  return fetch(`https://api.weather.com/conditions/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

export { getCurrentWeather, apiKey };


// file 2: weatherComponent.js
import { getCurrentWeather } from './weatherAPI';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}

```

### Only Expose and Consume Data You Need

Reduce complexity by exposing and consuming only necessary information. Discover how to implement this practice [here](#only-expose-and-consume-data-you-need).

```js
// Original object
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

// Only expose and consume the name and email properties
const { name, email } = user;

console.log(name); // 'Alice'
console.log(email); // 'alice@example.com'
```

### Modularization

Break down code into smaller, manageable modules for improved readability. Learn about modularization in [this section](#modularization).

```js
// Without modularization
function calculatePrice(quantity, price, tax) {
  let subtotal = quantity * price;
  let total = subtotal + (subtotal * tax);
  return total;
}

// Without modularization
let quantity = parseInt(prompt("Enter quantity: "));
let price = parseFloat(prompt("Enter price: "));
let tax = parseFloat(prompt("Enter tax rate: "));

let total = calculatePrice(quantity, price, tax);
console.log("Total: $" + total.toFixed(2));


// With modularization
function calculateSubtotal(quantity, price) {
  return quantity * price;
}

function calculateTotal(subtotal, tax) {
  return subtotal + (subtotal * tax);
}

// With modularization
let quantity = parseInt(prompt("Enter quantity: "));
let price = parseFloat(prompt("Enter price: "));
let tax = parseFloat(prompt("Enter tax rate: "));

let subtotal = calculateSubtotal(quantity, price);
let total = calculateTotal(subtotal, tax);
console.log("Total: $" + total.toFixed(2));

```

### Folder Structures

Choose a well-organized folder structure to enhance project maintainability. Explore good and bad examples of folder structures [here](#folder-structures).

## Bad Folder Structure

```bash
// Bad folder structure
my-app/
├── App.js
├── index.js
├── components/
│   ├── Button.js
│   ├── Card.js
│   └── Navbar.js
├── containers/
│   ├── Home.js
│   ├── Login.js
│   └── Profile.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   └── Profile.js
└── utilities/
    ├── api.js
    └── helpers.js
```

## Good Folder Structure

```bash
// Good folder structure
my-app/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Card/
│   │   │   ├── Card.js
│   │   │   ├── Card.module.css
│   │   │   └── index.js
│   │   └── Navbar/
│   │       ├── Navbar.js
│   │       ├── Navbar.module.css
│   │       └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── Login/
│   │   │   ├── Login.js
│   │   │   ├── Login.module.css
│   │   │   └── index.js
│   │   └── Profile/
│   │       ├── Profile.js
│   │       ├── Profile.module.css
│   │       └── index.js
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   ├── App.js
│   └── index.js
└── public/
    ├── index.html
    └── favicon.ico
```

### Documentation

Proper documentation is essential for clean code. Discover the importance of comments, inline documentation, and tools like JSDoc in [this section](#documentation).

## Wrapping Up

I hope you enjoyed this comprehensive guide on writing clean code. If you have any questions or want to connect, feel free to reach out on [LinkedIn](#) or [Twitter](#).

See you in the next one!
