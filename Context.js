
var Name;
var Details ; 
var DueDate ; 
var Time ; 

var Tasks = [];
var current ; 

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
		
		alert("New Task Added"); 
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('deleteTask');
	 
    // onClick's logic below:
    link.addEventListener('click', function() {		
		Tasks.splice(current, 1) 
		current = Tasks.length - 1;
		Refresh(); 
		alert("Good Job!"); 
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('next');
	 
    // onClick's logic below:
    link.addEventListener('click', function() {
		if ( current != Tasks.length -1 ){
			current = current + 1
		}
		Refresh(); 
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('previous');
	 
    // onClick's logic below:
    link.addEventListener('click', function() {
		if ( current != 0 ){
			current = current - 1
		}
		Refresh(); 
    });
});

function Refresh(){
		if(current < 0){
			current = 0; 
		} ;
		
		if(Tasks.length == 0){
			document.querySelector('.Nameresults').innerHTML = "";
			document.querySelector('.Detailresults').innerHTML = "";
			document.querySelector('.Dateresults').innerHTML = "";
			document.querySelector('.Timeresults').innerHTML = "";
		};
		
		
		document.querySelector('.Nameresults').innerHTML = Tasks[current].Name;
		document.querySelector('.Detailresults').innerHTML = Tasks[current].Details;
		document.querySelector('.Dateresults').innerHTML = Tasks[current].DueDate;
		document.querySelector('.Timeresults').innerHTML = Tasks[current].Time;
}; 