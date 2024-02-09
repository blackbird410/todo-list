import { Sidebar, ListForm, TaskForm, Task, 
		TaskInput, DailyTasks, ListTasks, AllTasks, 
		MyDayHeader, MyDayStatus, defaultFolders, 
		userFolders, tasks, quotes, settingIcon } from "./data.js";

const DATE_STRING_BOUND = 24;

export function displayTaskNote(e) {
	// Get the title of the task
	// Find the corresponding task in the array
	// Take the description and note elements
	// Add them in the container of the task
	// Add a trick to toggle display of those two elements

	if (e.currentTarget.querySelector('.task-note') == null)
	{
		let i;
		let targetTitle = e.currentTarget.querySelector('.task-title').textContent;
		for (i = 0; i < tasks.length; i++)
		{
			if (tasks[i].title == targetTitle)
			{
				const desc = document.createElement('div');
				desc.classList.add('task-description');
				desc.textContent = tasks[i].description;

				const note = document.createElement('div');
				note.classList.add('task-note');
				note.textContent = tasks[i].notes;

				e.currentTarget.appendChild(desc);
				e.currentTarget.appendChild(note);
				break;
			}
		}

	}
	else {
		e.currentTarget.querySelector('.task-description').remove();
		e.currentTarget.querySelector('.task-note').remove();
	}
}


export function getChecklistTitle() {
	let element = document.querySelector('.list-title');
	return (element != null) ? element.textContent : "";
}

export function displayMain()
{
	populateUserList();
	const mainIcon = document.createElement('img');
	mainIcon.src = settingIcon;
	mainIcon.id = 'setting-icon';
	mainIcon.addEventListener('mouseover', displaySidebar);
	document.body.appendChild(mainIcon);
    displayMyDay();
}

export function displayMyDay()
{
	const previousContent = document.querySelector("#content");
	if (previousContent != null)
		previousContent.remove();

	const content = document.createElement('div');
	content.id = "content";

	const welcomeMsg = getWelcomeMessage();
	const quote = getDailyQuote(quotes);

	const header = new MyDayHeader(welcomeMsg, quote);
	content.appendChild(header.wrapper);
	
	const date = getDate();
	const myDayStatus = new MyDayStatus(date, getDayStatus());
	content.appendChild(myDayStatus.wrapper);

	const tasksWrapper = document.createElement('div');
	tasksWrapper.classList.add('tasks-wrapper');
	
	const myDay = new Date().toString().slice(0, 24);
	const myDayTasks = getMyDayTasks(myDay);
	myDayTasks.forEach(task => {
		task.dueDate.textContent = new Date(task.dueDate.textContent).toLocaleTimeString();
		tasksWrapper.appendChild(task.wrapper);
	});
	content.appendChild(tasksWrapper);

	const inputWrapper = new TaskInput().wrapper;
	content.appendChild(inputWrapper);
	document.body.appendChild(content);
	addTaskbarListener();
}

function addTaskbarListener() {
	const content = document.querySelector("#content");
	content.addEventListener('mouseover', () => {
		let sidebar = document.querySelector('.sidebar');
		if (sidebar != null)
			sidebar.remove();
	});
}

export function displayMyWeek()
{
	const previousContent = document.querySelector("#content");
	if (previousContent != null)
		previousContent.remove();

	const content = document.createElement('div');
	content.id = "content";

	// Here we will add objects to the container for the 7 next days
	// Each Container should have the task for the specified day
	// We start appending from today
	// So get the tasks of each day
	const weekTasks = getWeekTasks();
	let i = 1;
	weekTasks.forEach(day => {
		const dailyTasks = new DailyTasks(day);
		dailyTasks.wrapper.id = `day-${i}`;
		i++;
		content.appendChild(dailyTasks.wrapper);
	});

	content.classList.add('grid-row', 'my-week');
	
	document.body.appendChild(content);
	addTaskbarListener();
}

function getWeekTasks() {
	let currentDate;
	let weekTasks = [];

	for (let d = 0; d < 7; d++)
	{
		currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + d);
		currentDate = currentDate.toString().slice(0, DATE_STRING_BOUND);
		weekTasks.push(
		{
			"title": getDay(currentDate),
			"tasks": getMyDayTasks(currentDate),
		});
	}

	return weekTasks;
}

export function weekTasksCount() {
	let endDate = new Date();
	endDate.setDate(endDate.getDate() + 6);

	let count = 0;
	tasks.forEach(task => {
		if (new Date(task.dueDate) <  endDate)
			count++;
	});

	return count;
}

export function displayMyTasks() {	
	const previousContent = document.querySelector("#content");
	if (previousContent != null)
		previousContent.remove();

	const content = document.createElement('div');
	content.id = "content";

	let allTasks = [];
	tasks.forEach(task => {
		allTasks.push(new Task(task));
	});
	allTasks = new AllTasks(
		{
			"title" : "My tasks",
			"tasks": allTasks,
		});
	content.appendChild(allTasks.wrapper);
	document.body.appendChild(content);
	addTaskbarListener();
}

export function displayListTasks(e) {
	let target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;

	if (target != "My day" && target != "Next 7 days" && target != "All my tasks")
	{
		const previousContent = document.querySelector("#content");
		if (previousContent != null)
			previousContent.remove();

		const content = document.createElement('div');
		content.id = "content";
		
		let listTasks = getListTasks(target);
		listTasks = {
			"title": target,
			"tasks": listTasks,
		};
		const checkList = new ListTasks(listTasks);
		content.appendChild(checkList.wrapper);

		document.body.appendChild(content);
		addTaskbarListener();
	}
}

export function getListTasks(list) {
	let listTasks = [];

	tasks.forEach(task => {
		if (task.checklist == list)
			listTasks.push(new Task(task));
	});

	return listTasks;
}


function removeUserList(e) {
	const target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;
	
	let i;
	for(i = 0; i < userFolders.length; i++)
	{
		if (userFolders[i].title == target)
		{
			userFolders.splice(i, 1);
			e.currentTarget.parentElement.remove();
			break;
		}
	}

	// Removes all the tasks associated with the list
	for (i = 0; i < tasks.length; i++)
	{
		if (tasks[i].checklist == target)
		{
			tasks.splice(i, 1);
			i--;
		}
	}
	refreshPage();
	document.querySelector('.sidebar').remove();
	displaySidebar();
}

function populateUserList() {
	let list = [];
	let found;
	tasks.forEach(task => {
		found = false;
		for (let e in list) 
		{
			if (list[e] == task.checklist) 
			{
				found = true;
				break;
			}
		}

		if (!found) {
			list.push(task.checklist);
			userFolders.push(
			{
				"title": task.checklist,
				"iconClass": "",
			});
		}
	})
}

export function addTask(e) {
	e.preventDefault();
	const title = document.querySelector('form #title').value;
	let date = document.querySelector("form #duedate").value; 
	let time = document.querySelector("form #duetime").value;
	date = new Date(date + ' ' + time).toString().slice(0, 24);

	if (title != '')
	{
		tasks.push(
			{
				"title": title,
				"description": document.querySelector("form #description").value,
				"dueDate": date,
				"priority": document.querySelector("form #priority").value,
				"notes": document.querySelector("form #notes").value,
				"checklist": document.querySelector("form #checklist").value,
			}
		);
		refreshPage();
		removeForm();
	}
}

function refreshPage() {
	if (document.querySelector('.my-week'))
		displayMyWeek();
	else if (document.querySelector('.all-tasks-wrapper'))
		displayMyTasks();
	else 
		displayMyDay();
}

function addFolder() {
	const folderName = document.querySelector('#list-name').value;
	if (folderName != '')
	{
		userFolders.push(
			{
				"title": folderName,
				"iconClass": "",
			}
		);

		document.querySelector('.sidebar').remove();
		displaySidebar();
		removeForm();
	}
}

function removeForm() {
	const form = document.querySelector('form');
	if(form != null)
		form.remove();
}

function displayListForm() {
	if (document.querySelector('#list-form') == null)
	{
		const listForm = new ListForm();
		document.body.appendChild(listForm.form);
	}
}

function displaySidebar() {
	if (document.querySelector('.sidebar') == null)
	{
		const sidebar = new Sidebar(defaultFolders, userFolders);
		document.body.appendChild(sidebar.wrapper);
	}
}

export function displayTaskForm(e) {
	if (document.querySelector('#task-form') == null)
	{
		setTheDay(e);
		const taskForm = new TaskForm();
		document.body.appendChild(taskForm.form);
	}
}

function formatTasks(tasks) {
	// Tranform the tasks objects into DOM elements

	let taskList = [];
	tasks.forEach(task => {
		taskList.push(new Task(task));
	});
	return taskList;
};

function sortTasks(a) {
	let nTasks = a.length;
	let i, j;

	for (i = 0; i < nTasks; i++)
	{
		for(j = i+1; j < nTasks; j++)
		{
			if (new Date(a[i].dueDate) > new Date(a[j].dueDate))
				swap(a[i], a[j]);
		}
	}
	return a;
};

function swap(a, b)
{
	let temp = '';

	temp = a.title;
	a.title = b.title;
	b.title = temp;

	temp = a.description;
	a.description = b.description;
	b.description = temp;

	temp = a.dueDate;
	a.dueDate = b.dueDate;
	b.dueDate = temp;

	temp = a.priority;
	a.priority = b.priority;
	b.priority = temp;

	temp = a.notes;
	a.notes = b.notes;
	b.notes = temp;

	temp = a.checklist;
	a.checklist = b.checklist;
	b.checklist = temp;
}

function getDayStatus() {
	const n = getMyDayTasks(new Date()).length;
	switch(n)
	{
		case 0:
			return "You have no event scheduled for today";
		case 1:
			return "You have one event scheduled for today";
		default:
			return `You have ${n} events scheduled for today`;
	}
}

function getMyDayTasks(date) {
	let myDayTasks = [];

	tasks.forEach(task => {
		if (new Date(task.dueDate).toLocaleDateString() == new Date(date).toLocaleDateString())
			myDayTasks.push(task);
	});

	return formatTasks(sortTasks(myDayTasks));
}

function getDate() {	
	const d = new Date().toDateString().split(' ').splice(0,3);
	return {
		"day": d[0],
		"number": Number(d[2]),
		"month": d[1],
	};
}

function getDay(d) {
	let day = new Date(d).toDateString().split(' ').splice(0,3)[0];

	switch(day) {
		case "Tue":
			return "Tuesday";
		case "Wed":
			return "Wednesday";
		case "Thu":
			return "Thursday";
		case "Sat":
			return "Saturday";
		default:
			return day + "day";
	}
}

function getDailyQuote(quotes) {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
	return quotes[quoteIndex];
}

function getWelcomeMessage() {
	return `Good ${getPeriodOfTheDay()}`;
};


function getPeriodOfTheDay() {
	const localeDate = new Date();
	const localeTime = localeDate.toLocaleTimeString(undefined, {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	let period = localeTime.split(' ')[1] 

	if (period ==  "AM")
		return "morning";
	else if (Number(localeTime.split(':')[0]) < 8)
		return "afternoon";
	else
		return "night";
}


function getUsername() {
	return "Neil";
};

function removeTask(taskTitle) {
	for (let i = 0; i < tasks.length; i++)
	{
		if (tasks[i].title == taskTitle)
		{
			tasks.splice(i, 1);
			break;
		}
	}
}

function setTaskComplete(e) {
	const target = e.currentTarget.parentElement;
	target.classList.add('task-completed');

	const targetTask = target.querySelector('.task-title').textContent;
	removeTask(targetTask);
	target.remove();
	refreshPage();
}

function today() {
	let d = new Date().toLocaleDateString().split('/');
	return `${d[2]}-${(d[0] < 10) ? `0${d[0]}` : d[0]}-${(d[1] < 10) ? `0${d[1]}` : d[1]}`;

}

export let inputDay = "";
function setTheDay(e) {
	let d = e.currentTarget.parentElement.querySelector('.day-title');
	if (d != null)
	{
		d = Number(e.currentTarget.parentElement.id.split('-')[1]) - 1;
		let currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + d);
		d = currentDate.toLocaleDateString().split('/');
		inputDay = `${d[2]}-${(d[0] < 10) ? `0${d[0]}` : d[0]}-${(d[1] < 10) ? `0${d[1]}` : d[1]}`;
	}
	else
		inputDay = today();
}

export { removeUserList, addFolder, removeForm, displayListForm, displaySidebar, getMyDayTasks, setTaskComplete, today };
