# DOM Practice

## Task 1 - A function called on click

The function handleClick currently looks like this...

```js
function handleClick() {
  console.log("Im just to prove it's working!");
  // Double the number of pennies
  // display in the output tag
}
```

Within the function...

👉 double the the value of the the pennies variable.

👉 update the `innerText` of the output tag to be `${pennies} pennies`.

## Task 2 - selecting and changing text

_This does not need to be in a function_

👉 Select the element with a class of `.quote` and store in a variable.

👉 Change its `innerText` to a funny quote of your choosing.

## Task 3 - selecting and changing style

_This does not need to be in a function_

👉 Select the `h1` tag using querySelector and store in variable.

👉 Change its `text-decoration` property to the value of `underline`.

## Task 4 - creating elements

_This does not need to be in a function_

There is a list of extra tips to be added to the unordered list with the id of `#tips-list`

👉 Select the tips list

👉 Use a for loop to loop through the array of tips

👉 for each tip...

- create an `li` element
- set the `innerText` of the `li` element to be the current tip
- append the newly created element as a child of the `ul`

## Task 5

_This does not need to be in a function. yet..._

Not all aspects of the page need to accessed with `querySelector`, some have shortcuts on the `document` object.

👉 Change the `title` property of the `document` by assigning it a new value.

## Task 6

👉 Put the code from Task 5 in a function.

👉 Have that function called on the click of the button with id `#click-me`

## Task 7

👉 Add an input field, and a new button to the html.

👉 Write a function that sets the `h1`'s `innerText` to be whatever is in the input field.

## Task 8

👉 Go Nuts! See what else you can do, use your imagination, combine with what you've learnt in the last couple of days! 🤯.
