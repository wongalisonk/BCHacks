
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

		var notification = {
			type: 'basic',
			title: 'New task "' + Tasks[current].Name + '" added',
			message: 'You now have ' + Tasks.length + ' task(s)',
			iconUrl: 'icon.png'
		};

		chrome.notifications.create('basic', notification);

		function clear() {
			chrome.notifications.clear('basic');
		};

		chrome.notifications.onClicked.addListener(clear);
    });
});

document.addEventListener('DOMContentLoaded', function() { 
    var link = document.getElementById('deleteTask');
	 
    // onClick's logic below:
    link.addEventListener('click', function() {		

    	var notification = {
    		type: 'image',
    		title: '"' + Tasks[current].Name + '" is such complete!',
    		message: 'Much wow, good jerb',
    		iconUrl: 'icon.png',
    		imageUrl: 'doge.jpg'
    	};

    	chrome.notifications.create('image', notification);

    	function clear() {
    		chrome.notifications.clear('image');
    	};

    	chrome.notifications.onClicked.addListener(clear);
		// chrome.notifications.create( 
		// 	'Image Notification', {
		// 	  type: "image",
		// 	  title: Tasks[current].Name + " is such complete!",
		// 	  message: "Much wow, good jerb",
		// 	  iconUrl: "icon.png",
		// 	  imageUrl: "doge.jpg"
		// 	}
		// );	

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
			document.querySelector('.Timeresults').innerHTML = "";
		};
		
		
		document.querySelector('.Nameresults').innerHTML = Tasks[current].Name;
		document.querySelector('.Detailresults').innerHTML = Tasks[current].Details;
		document.querySelector('.Dateresults').innerHTML = Tasks[current].DueDate;
		document.querySelector('.Timeresults').innerHTML = Tasks[current].Time;
}; 