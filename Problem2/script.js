const { interval, asapScheduler, take } = rxjs;

//Sets up variables
var startBtn = document.getElementById("startTimerBtn");
var hours = document.getElementById("hours").value;
var minutes = document.getElementById("minutes").value;
var seconds = document.getElementById("seconds").value;
var hrBox = document.getElementById("remHours");
var minBox = document.getElementById("remMinutes");
var secBox = document.getElementById("remSeconds");

//Starts timer
rxjs.fromEvent(startBtn, "click").subscribe(() => {

		secBox.innerHTML=seconds;

	for(hours = hours;hours >= 0;hours--) {
		hrBox.innerHTML=hours;
		for(minutes = minutes;minutes >= 0;minutes--) {
			minBox.innerHTML=minutes;
			console.log(minutes);
			countSeconds(seconds);
			seconds=60;
		}
		}
});


function countSeconds(tempSec){
	secondTimerInterval = interval(1000,asapScheduler);
	getSeconds = secondTimerInterval.pipe(take(tempSec));
	getSeconds.subscribe(sec => {
		secBox.innerHTML=tempSec-sec-1;
		return sec;
	});
}