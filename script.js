/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var flip = 0;
var tails = document.querySelector('#tailInput');
var submit = document.querySelector('#submit');
console.log(submit)
var coinOutput = document.querySelector("#coinOutput");

submit.addEventListener('click', function(event) {
  coinOutput.innerHTML = ``;
  var userInput = tails.value;
  var count = 0;
  var tailsCount = 0;
  while(tailsCount<userInput){
    flip = Math.floor(Math.random()*2)
    if(flip == 1){
      count++;
      tailsCount++;
    }
    else {
      count++;
    }
  }
  coinOutput.innerHTML += `<h1>You flipped a total of ${tailsCount} tails.</h1>`
  coinOutput.innerHTML += `<h1>You flipped the coin ${count} times</h1>`
})

//Create a program that tells you how many times it takes to flip 5 tails in a row.
var streakButon = document.querySelector("#streakSubmit");
var streak = document.querySelector("#streakInput");
var streakOutput = document.querySelector("#streakOutput");
streakButon.addEventListener('click', (e)=> {
  streakOutput.innerHTML = ``;
  console.log('clicked');
  var count = 0;
  var tailsCount = 0;
  var userInput = streak.value
  while(tailsCount<=userInput){
    flip = Math.floor(Math.random()*2);
    if(flip == 0) {
      count++;
      tailsCount++;
    } else {
      count++;
      tailsCount=0;
    }
  }
  streakOutput.innerHTML = `<h1>It took ${count} flips to get ${userInput} tails in a row</h1>`;
})