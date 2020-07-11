COIN FLIP SIMULATOR
=================
Simulators are used to represent real-world phenoma and/or outcomes through the use of computer programming. Today we are going to create a simulator that attempts to simulate a coin-flip.

![](https://media.giphy.com/media/10bv4HhibS9nZC/giphy.gif)

GOAL
------------
Today you are going to build a coin flip simulator that does two things. First, **you are going to build a simulator that tells you how long it will take to get a certain number of tails from a coin flip**. E.g. It took 105 flips to get 50 instances of tails.  
![Exemplar part 1](https://media.giphy.com/media/lMBwBnupOq0luDMwhn/giphy.gif)

Second, **you are going to build a simulator that tells you how long it will take to get a certain number of tails in a *row***. E.g. it took 24 flips to get tails 3 times in a row.  
![Exemplar part 2](https://media.giphy.com/media/Qa5F17uDi7LFTyHiMy/giphy.gif)

TASK
------------
**NOTE ON RANDOM NUMBERS**: You can use the `Math` library in JavaScript in order to generate random numbers. By using `Math.random()` you can generate a random number between 0 and 1. You can wrap this in `Math.floor()` and multiplication by some integer to get a random number between fixed values. Example below: 
```javascript
// Returns a random value between 0 and 1.
Math.random()

// Rounds any number down to the nearest whole number
Math.floor()

// Returns a random number between 0 and 9
Math.floor(Math.random() * 10)
```

For today's lab you will need to use `while` loops in addition to concepts you have previously learned (`Math.random()`, `querySelector()`, `addEventListener()`, etc.):

**PART 1: COIN FLIP SIMULATOR**  
1. Select for the HTML elements that you will need using `querySelector()`. You can ignore the second input range for now as we will use this in the second part of the lab.
2. The simplest way to simulate a coinflip is to randomly generate a number of 0 or 1. 0 can be heads and 1 can be tails. Print a random number of 0 or 1 to the console every time you refresh the page.
3. Construct a basic while loop that will count the number of flips it takes to get to 10 instances of tails. 
```javascript
var tails = 0
var count = 0
var flip = Math.floor(Math.random()*1)

while(tails < 10){

/*
Inside the loop you should: 
(1) Flip the coin and update the value
(2) Check if it is tails and increase the tails count by 1 if tails
(3) Increase the count by 1 
*/


}
//This should print out 10 if while loop is correct
console.log(tails)

//This should print out the number of flips it took to get 10 tails.
console.log(count)
```
4. Refactor the code so that it runs for ***any*** userInput when they click the first "Run Simulator" buttons
5. Update the `innerHTML` of the div with a class of coinOutput with the final results of the simulator.

**PART 2: COIN STREAK SIMULATOR**  
The code you generated in part 1 can be quite informative to this portion! You are now going to get a user input and count for the number of times it takes to get that number of tails ***in a row***.
1. Select for the HTML elements that you will need using `querySelector()`. 
2. Construct a while loop that does two things. First, it should update the current flip using `Math.random()` and `Math.floor()`. Next, it should determine if the coin flip is tails. The unique part here is that tailsCount should return to 0 if the flip is **NOT** tails. An example of some pseudocode can be seen below. Get this to print to the console. **NOTE: You should check to see how long it takes to get a small number of tails in a row to avoid crashing the program.**
```
// Ouside while loop
tailsStreak <-- 0

// Inside while loop  
Update current flip

IF (current flip is a tails)
  tailsCount <-- tailsCount + 1
  
ELSE
  tailsCount <-- 0
  
  
DISPLAY (current flip)
DISPLAY (headsCount)
```
3. Refactor the code so that it runs for ***any*** userInput when they click the first "Run Simulator" buttons
4. Update the `innerHTML` of the div with a class of streakOutput with the final results of the simulator.
