import settingIcon from './setting.png';


let defaultFolders = [
	{
		"title": "My day",
		"iconClass": "gg-media-live",
		"files": "5",
	},
	{
		"title": "Next 7 days",
		"iconClass": "gg-calendar-due",
		"files": "3",
	},
	{
		"title": "All my tasks",
		"iconClass": "gg-list",
		"files": "4",
	},
]

let userFolders = [	
	{
		"title": "Personal",
		"iconClass": "",
		"files": "3",
	},
	{
		"title": "Work",
		"iconClass": "",
		"files": "2",
	},
	{
		"title": "Grocery List",
		"iconClass": "",
		"files": "1",
	},
]

class SidebarFolder {
	constructor(folder) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('folder-wrapper');
	
		this.icon = document.createElement('i');
		if (folder.iconClass != '')
			this.icon.classList.add(folder.iconClass);
		else
			this.icon.classList.add('gg-user-list');

		this.wrapper.appendChild(this.icon);

		this.title = document.createElement('div');
		this.title.classList.add('folder-title');
		this.title.textContent = folder.title;
		this.wrapper.appendChild(this.title);

		this.count = document.createElement('div');
		this.count.classList.add('file-count');
		this.count.textContent = folder.files;
		this.wrapper.appendChild(this.count);
	}
}

class Sidebar {
	constructor() {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('sidebar');

		this.defaultWrapper = document.createElement('div');
		this.defaultWrapper.classList.add('default-wrapper');
		defaultFolders.forEach(folder => {
			const f = new SidebarFolder(folder);
			this.defaultWrapper.appendChild(f.wrapper);
		});
		this.wrapper.appendChild(this.defaultWrapper);

		this.userList = document.createElement('div');
		this.userList.classList.add('user-list');

		this.titleWrapper =  document.createElement('div');
		this.titleWrapper.classList.add('title-wrapper');
		this.title = document.createElement('div');
		this.title.textContent =  'My lists';
		this.titleWrapper.appendChild(this.title);
		this.icon = document.createElement('i');
		this.icon.classList.add('gg-add');
		this.titleWrapper.appendChild(this.icon);
		
		this.userList.appendChild(this.titleWrapper);
		this.wrapper.appendChild(this.userList);

	}
}

class MyDayHeader {
	constructor(welcomeText, message) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('my-day-header');

		this.welcomeText = document.createElement('div');
		this.welcomeText.classList.add('welcome-msg');
		this.welcomeText.textContent = welcomeText;
		this.wrapper.appendChild(this.welcomeText);

		this.message = document.createElement('div');
		this.message.classList.add('header-quote');
		this.message.textContent = message;
		this.wrapper.appendChild(this.message);
	}
}

class MyDayStatus {
	constructor(date, message) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('my-day-status');

		this.date = document.createElement('div');
		this.date.classList.add('date-wrapper');
		
		this.weekday = document.createElement('div');
		this.weekday.classList.add('weekday');
		this.weekday.textContent = date.day;
		this.date.appendChild(this.weekday);

		this.weekNumber = document.createElement('div');
		this.weekNumber.classList.add('week-number');
		this.weekNumber.textContent = date.number;
		this.date.appendChild(this.weekNumber);

		this.month = document.createElement('div');
		this.month.classList.add('month');
		this.month.textContent = date.month;
		this.date.appendChild(this.month);
		this.wrapper.appendChild(this.date);

		this.msg = document.createElement('div');
		this.msg.classList.add('my-day-status-msg');
		this.msg.textContent = message;
		this.wrapper.appendChild(this.msg);
	}
}

class Task {
	constructor(task) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('task-wrapper', `priority-${task.priority}`);

		let taskId = task.title.toLowerCase().split(' ').join('-');

		this.checkBtn = document.createElement('input');
		this.checkBtn.classList.add('task-checkbox');
		this.checkBtn.type = 'checkbox';
		this.checkBtn.id = taskId;
		this.checkBtn.name = taskId;
		this.checkBtn.value = task.title;
		this.wrapper.appendChild(this.checkBtn);

		this.title = document.createElement('div');
		this.title.classList.add('task-title');
		this.title.textContent = task.title;
		this.wrapper.appendChild(this.title);

		this.description = document.createElement('div');
		this.description.classList.add('task-description');
		this.description.textContent = task.description;
		this.wrapper.appendChild(this.description);

		this.dueDate = document.createElement('div');
		this.dueDate.classList.add('task-due-date');
		this.dueDate.textContent = task.dueDate;
		this.wrapper.appendChild(this.dueDate);

		this.notes = document.createElement('div');
		this.notes.classList.add('task-note');
		this.notes.textContent = task.notes;
		this.wrapper.appendChild(this.notes);	
	}
}

export function displayContent()
{
	const content = document.createElement('div');
	content.id = "content";
	
	const mainIcon = document.createElement('img');
	mainIcon.src = settingIcon;
	mainIcon.id = 'setting-icon';
	mainIcon.addEventListener('mouseover', displaySidebar);
	document.body.appendChild(mainIcon);

	const welcomeMsg = getWelcomeMessage();
	const quote = getDailyQuote();

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

function displaySidebar() {
	if (document.querySelector('.sidebar') == null)
	{
		const sidebar = new Sidebar();
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

function getDailyQuote() {
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

const quotes = [
	"Be so good no one can ignore you",
	"Remove doubts with actions",
];
const quoteIndex = Math.floor(Math.random() * quotes.length);

const tasks = [
	{
		"title": "Practice Chinese",
		"description": "Practice writing Chinese characters for 30 minutes.",
		"dueDate": "9:00 PM",
		"priority": "1",
		"notes": "Chapter 5",
		"checklist": "",
	},
	{
		"title": "Cook dinner",
		"description": "Today we have noodles on the menu.",
		"dueDate": "3:00 PM",
		"priority": "2",
		"notes": "Use mushrooms, green pepper and onions",
		"checklist": "",
	},
	{
		"title": "Exercise",
		"description": "Five sets of 20 push-ups, five-sets of 20 squats",
		"dueDate": "5:00 PM",
		"priority": "3",
		"notes": "Go hard, go fast and be strong.",
		"checklist": "",
	},
	{
		"title": "Buy fruits",
		"description": "Buy 7 apples and some bananas for around 150 NTD.",
		"dueDate": "7:00 PM",
		"priority": "2",
		"notes": "Eat at least one fruit per day and you won't have to visit the med before a long time.",
		"checklist": "",
	},
];
