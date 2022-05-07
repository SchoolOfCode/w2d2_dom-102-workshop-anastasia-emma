let pennies = 1;
const output = document.querySelector("output");
let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
//Task 2
const quote = document.querySelector(".quote");
quote.innerText = "This is a funny quote, honest!"

//Task 3
h1Variable = document.querySelector('h1');
console.log(h1Variable)
h1Variable.style.textDecoration = 'underline';

//Task 4
for (i = 0; i < extraTips.length; i++) {
  console.log(extraTips[i]);
  let ul = document.querySelector('ul')
  newLi = document.createElement('li');
  newLi.innerText = extraTips[i];
  ul.appendChild(newLi);
}

/*
//Task 5
document.title = "Pennies From Heaven"
*/

//Task 6
function changePageTitle() {
  document.title = "Pennies From Heaven";
}

//Task 1
function handleClick() {
  console.log("Im just to prove it's working!");
  pennies = pennies * 2;
  output.innerText = (`${pennies} pennies`)
}
