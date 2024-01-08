// you can write js here
console.log('exo-2');

var _isTesting_ = true;

const weekend = "WEEK-END"
const week = "SEMAINE =/"

let myDate = new Date;
let day = myDate.getDay()
let hour = myDate.getHours()

if(_isTesting_) {
	day = prompt("Day")
	hour = prompt("Hour")
}

console.log({day, hour})
if(day == 0 || day == 6) {
	console.log(weekend)
} else {
	if(day == 1 && hour < 9) 		// lundi < 9h
		console.log(weekend)
	else if(day == 5 && hour > 17)	// Vendredi > 17h
		console.log(weekend)
	else
		console.log(week)
}