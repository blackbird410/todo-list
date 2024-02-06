import settingIcon from './setting.png';
import { removeUserList, addFolder, removeForm, displayMyDay, displayMyWeek, displayMyTasks, displayListForm } from './functions.js';

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
	constructor(defaultFolders, userFolders) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('sidebar');

		this.defaultWrapper = document.createElement('div');
		this.defaultWrapper.classList.add('default-wrapper');
		defaultFolders.forEach(folder => {
			const f = new SidebarFolder(folder);

			switch(folder.title)
			{
				case "My day":
					f.wrapper.addEventListener('click', displayMyDay);
					break;
				case "Next 7 days":
					f.wrapper.addEventListener('click', displayMyWeek);
					break;
				default: 
					f.wrapper.addEventListener('click', displayMyTasks);
					break;
			}

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
		this.icon.addEventListener('click', displayListForm);	
		this.titleWrapper.appendChild(this.icon);
	
		this.wrapper.appendChild(this.titleWrapper);
		userFolders.forEach(folder => {
			const f = new SidebarFolder(folder);

			const removeIcon = document.createElement('i');
			removeIcon.classList.add('gg-remove');
			removeIcon.addEventListener('click', removeUserList);
			f.wrapper.appendChild(removeIcon);
			this.userList.appendChild(f.wrapper);
		});
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

class ListForm {
	constructor() {
		this.form = document.createElement('form');
		this.form.id = 'list-form';
		this.form.noValidate = true;

		this.input = document.createElement('input');
		this.input.id = 'list-name';
		this.input.name = 'list-name';
		this.input.placeholder = 'Add list name';
		this.form.appendChild(this.input);

		this.btnWrapper = document.createElement('div');
		this.btnWrapper.classList.add('btn-wrapper');
		this.btnSave = document.createElement('button');
		this.btnSave.id = 'add-list-btn';
		this.btnSave.textContent = 'Save'
		this.btnSave.addEventListener('click', addFolder);
		this.btnWrapper.appendChild(this.btnSave);

		this.btnCancel = document.createElement('button');
		this.btnCancel.id = 'cancel-btn';
		this.btnCancel.name = 'cancel-btn';
		this.btnCancel.textContent = 'Cancel';
		this.btnCancel.addEventListener('click', removeForm);
		this.btnWrapper.appendChild(this.btnCancel);

		this.form.appendChild(this.btnWrapper);
	}
}

const quotes = [
	"Be so good no one can ignore you",
	"Remove doubts with actions",
];

const tasks = [
	{
		"title": "Practice Chinese",
		"description": "Practice writing Chinese characters for 30 minutes.",
		"dueDate": "Tue Feb 06 2024 23:43:09",
		"priority": "1",
		"notes": "Chapter 5",
		"checklist": "",
	},
	{
		"title": "Cook dinner",
		"description": "Today we have noodles on the menu.",
		"dueDate": "Mon Feb 05 2024 16:00:00",
		"priority": "2",
		"notes": "Use mushrooms, green pepper and onions",
		"checklist": "",
	},
	{
		"title": "Exercise",
		"description": "Five sets of 20 push-ups, five-sets of 20 squats",
		"dueDate": "Thu Feb 07 2024 18:00:00",
		"priority": "3",
		"notes": "Go hard, go fast and be strong.",
		"checklist": "",
	},
	{
		"title": "Buy fruits",
		"description": "Buy 7 apples and some bananas for around 150 NTD.",
		"dueDate": "Thu Feb 07 2024 08:00:00",
		"priority": "2",
		"notes": "Eat at least one fruit per day and you won't have to visit the med before a long time.",
		"checklist": "",
	},
];

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
];

export { Sidebar, ListForm, Task, MyDayHeader, MyDayStatus, defaultFolders, userFolders, tasks, quotes, settingIcon };
