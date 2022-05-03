let pennies = 1;
const output = document.querySelector("output");
const quote = document.querySelector(".quote");
quote.innerText = "This is a funny quote, honest!"

h1Variable = document.querySelector('h1');
console.log(h1Variable)
h1Variable.style.textDecoration = 'underline';

function handleClick() {
  console.log("Im just to prove it's working!");
  pennies = pennies * 2;
  output.innerText = (`${pennies} pennies`)
  // Double the number of pennies
  // display in the output tag
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
