import { Sidebar, ListForm, Task, MyDayHeader, MyDayStatus, 
    defaultFolders, userFolders, tasks, quotes, settingIcon } from "./data.js";

export function displayMain()
{
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
	const tasks = getTasks();
	tasks.forEach(task => {
		tasksWrapper.appendChild(task.wrapper);
	});
	content.appendChild(tasksWrapper);

	const inputWrapper = document.createElement('div');
	inputWrapper.classList.add('input-wrapper');

	const icon = document.createElement('i');
	icon.classList.add('gg-add');
	inputWrapper.appendChild(icon);

	const input = document.createElement('input');
	input.id = 'task-input';
	input.name = 'task-input';
	input.placeholder = "Add task";
	inputWrapper.appendChild(input);
	content.appendChild(inputWrapper);
	content.addEventListener('mouseover', () => {
		let sidebar = document.querySelector('.sidebar');
		if (sidebar != null)
			sidebar.remove();
	});

	document.body.appendChild(content);
}

export function displayMyWeek()
{
	const previousContent = document.querySelector("#content");
	if (previousContent != null)
		previousContent.remove();

	const content = document.createElement('div');
	content.id = "content";
	
	document.body.appendChild(content);
}

export function displayMyTasks() {	
	const previousContent = document.querySelector("#content");
	if (previousContent != null)
		previousContent.remove();

	const content = document.createElement('div');
	content.id = "content";
	
	document.body.appendChild(content);
}

function removeUserList(e) {
	const target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;

	for(let i = 0; i < userFolders.length; i++)
	{
		if (userFolders[i].title == target)
		{
			userFolders.splice(i, 1);
			e.currentTarget.parentElement.remove();
			break;
		}
	}
}

function addFolder() {
	const folderName = document.querySelector('#list-name').value;
	if (folderName != '')
	{
		userFolders.push(
		{
			"title": folderName,
			"iconClass": "",
			"files": "0",
		});
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

function getTasks() {
	let taskList = [];
	let sortedTasks = getSortedTasks();
	sortedTasks.forEach(task => {
		taskList.push(new Task(task));
	});
	return taskList;
};

function getSortedTasks() {
	let a = tasks;
	let nTasks = a.length;
	let i, j;

	for (i = 0; i < nTasks; i++)
	{
		for(j = i+1; j < nTasks; j++)
		{
			if (shouldSwap(a[i], a[j]))
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

function shouldSwap(first, second) {
	// Compare the time of both and return true if a is scheduled later than b
	let a = first.dueDate;
	let b = second.dueDate;
	let timeA = (a.split(' ')[1] == 'PM') ? Number(a.split(' ')[0].split(':').join('')) + 1200 : Number(a.split(' ')[0].split(':').join(''));

	let timeB = (b.split(' ')[1] == 'PM') ? Number(b.split(' ')[0].split(':').join('')) + 1200 : Number(b.split(' ')[0].split(':').join(''));

	return timeA > timeB;
}

function getDayStatus() {
	return "You have no event scheduled for today";
}

function getDate() {	
	const d = new Date().toDateString().split(' ').splice(0,3);
	return {
		"day": d[0],
		"number": Number(d[2]),
		"month": d[1],
	};
}

function getDailyQuote(quotes) {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
	return quotes[quoteIndex];
}

function getWelcomeMessage() {
	return `Good ${getPeriodOfTheDay()}, ${getUsername()}`;
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

export { removeUserList, addFolder, removeForm, displayListForm, displaySidebar };