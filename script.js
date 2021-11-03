var flips = 0;
var toss = 0
var headCount = 0
var tailCount = 0
var coinOutput = document.querySelector("#coinOutput")
var flipCountButton = document.querySelector("#submit")
var totalFlips
var streakButton = document.querySelector("#streakSubmit")
var streakOutput = document.querySelector("#streakOutput")
var streakInput = document.querySelector("#streakInput")
flipCountButton.addEventListener("click", function(){
	var totalFlips = document.querySelector("#tailInput").value
	tailCount = 0
	flips = 0
	while(flips < totalFlips){
	toss = Math.floor(Math.random()*2)
	if(toss == 1){
		headCount++
	}
	else {
		tailCount++
	}
	flips++;
}
	coinOutput.innerHTML = `<h1>You flipped ${tailCount} tails</h1>
	<h1>You flipped the coin ${flips} times</h1>`
})

streakButton.addEventListener("click", function(){
	streakInput = document.querySelector("#streakInput").value
	toss = 0
	var totalTailsFilipped = 0
	flips = 0
	while(totalTailsFilipped < streakInput){
		toss = Math.floor(Math.random()*2)
		if(toss == 1){
			totalTailsFilipped++
		}
		else {
			totalTailsFilipped = 0;
		}
		flips++
	}
	streakOutput.innerHTML = `<h1>It took ${flips} flips to get ${streakInput} tails`
	console.log(flips)
})
