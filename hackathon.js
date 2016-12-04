document.getElementById("submitForm").onclick = setAlarm;

function setAlarm() {
	chrome.alarms.create(Name, Time);
};

document.getElementById("deleteTask").onclick = stopAlarm;

function stopAlarm() {
	chrome.alarms.clear(Name);
};