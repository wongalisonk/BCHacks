
var Name;
var Details ; 
var DueDate ; 
var Time ; 

var Tasks = [];
var current ; 
var count = 0;

function Task(TaskName,TaskDetails,TaskDueDate,TaskTime){
	this.Name = TaskName ; 
	this.Details = TaskDetails ; 
	this.DueDate = TaskDueDate ; 
	this.Time = TaskTime ; 
}; 

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('submitForm');
    // onClick's logic below:
    link.addEventListener('click', function() {
		
		Tasks.push(new Task(document.getElementById("TaskName").value,document.getElementById("Detail").value,document.getElementById("Date").value,document.getElementById("TimeNeeded").value)); 
		
		current = Tasks.length -1 ; 
		Refresh(); 
		
		count++;
		chrome.notifications.create(
		'Basic Notification', {
			type: 'basic',
			iconUrl: 'icon.png',
			title: 'Boop',
			message: "You now have " + count + " task(s)"
		}
	);
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('DeleteTasks');
    // onClick's logic below:
    link.addEventListener('click', function() { 
		Tasks.splice(index, current); 
		alert(); 
		current = Tasks.length - 1;
		if(current < 0){
			current = 0; 
		}
		alert("Good Job!"); 
    });
});

function Refresh(){
		document.querySelector('.Nameresults').innerHTML = Tasks[current].Name;
		document.querySelector('.Detailresults').innerHTML = Tasks[current].Details;
		document.querySelector('.Dateresults').innerHTML = Tasks[current].DueDate;
		document.querySelector('.Timeresults').innerHTML = Tasks[current].Time;
}; 