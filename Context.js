
var names = [];
var details = []; 
var dueDates = []; 
var times = []; 

document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('button');
	button.addEventListener('click', function() {
		submitForm();
	});
});

function submitForm() {
	alert();
	names.push(document.getElementById("TaskName"));
	details.push(document.getElementById("Detail"));
	dueDates.push(document.getElementById("Date"));
	times.push(document.getElementById("TimeNeeded"));

	document.getElementById("insert").innerHTML = names.toString;
};