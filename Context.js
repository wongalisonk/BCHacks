
var names = [];
var details = [] ; 
var dueDates = [] ; 
var times = [] ; 

function submitForm() {
	names.push(document.getElementById("TaskName"));
	details.push(document.getElementById("Detail"));
	dueDates.push(document.getElementById("Date"));
	times.push(document.getElementById("TimeNeeded"));

	document.getElementById("insert").innerHTML = names.toString;
};

function notify(){
	alert(); 
};
