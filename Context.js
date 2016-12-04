
var Name;
var Details ; 
var DueDate ;  

var Tasks = [];
var current ;
var count = 0; 



function Task(TaskName,TaskDetails,TaskDueDate,TaskTime){
	this.Name = TaskName ; 
	this.Details = TaskDetails ; 
	this.DueDate = TaskDueDate ; 
}; 





document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('submitForm');
    // onClick's logic below:
    link.addEventListener('click', function() {
		
		Tasks.push(new Task(document.getElementById("TaskName").value,document.getElementById("Detail").value,document.getElementById("Date").value)); 
		
		current = Tasks.length -1 ; 
		Refresh(); 
		
		count++; 

		chrome.notifications.create(
			'Basic Notification', {
				type: 'basic',
				iconUrl: 'icon.png',
				title: 'New task added!',
				message: "You now have " + count + " task(s)"
			}
		);
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('deleteTask');
	 
    // onClick's logic below:
    link.addEventListener('click', function() {		
		count--;

		chrome.notifications.create( 
			'Image Notification', {
			  type: "image",
			  title: Tasks[current].Name + " is such complete!",
			  message: "Much wow, good jerb",
			  iconUrl: "icon.png",
			  imageUrl: "doge.jpg"
			}
		);	

		Tasks.splice(current, 1) 
		current = Tasks.length - 1;
		Refresh(); 		
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
		};
		
		
		document.querySelector('.Nameresults').innerHTML = Tasks[current].Name;
		document.querySelector('.Detailresults').innerHTML = Tasks[current].Details;
		document.querySelector('.Dateresults').innerHTML = Tasks[current].DueDate;
		
		
}; 

