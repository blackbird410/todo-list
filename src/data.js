import settingIcon from "./setting.png";
import {
  removeUserList,
  addFolder,
  addTask,
  removeForm,
  displayMyDay,
  displayMyWeek,
  displayMyTasks,
  displayListTasks,
  displayListForm,
  displayTaskForm,
  getMyDayTasks,
  setTaskComplete,
  today,
  inputDay,
  weekTasksCount,
  getListTasks,
  getChecklistTitle,
  displayTaskNote,
  countTasks,
} from "./functions";

const MIN_PRIORITY = 1;
const MAX_PRIORITY = 3;

export class SidebarFolder {
  constructor(folder) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("folder-wrapper");

    this.icon = document.createElement("i");
    if (folder.iconClass != "") this.icon.classList.add(folder.iconClass);
    else this.icon.classList.add("gg-user-list");

    this.icon.addEventListener("click", displayListTasks);
    this.wrapper.appendChild(this.icon);

    this.title = document.createElement("div");
    this.title.classList.add("folder-title");
    this.title.textContent = folder.title;
    this.title.addEventListener("click", displayListTasks);
    this.wrapper.appendChild(this.title);

    this.count = document.createElement("div");
    this.count.classList.add("file-count");
    this.count.addEventListener("click", displayListTasks);

    switch (folder.title) {
      case "My day":
        this.count.textContent = getMyDayTasks(new Date()).length;
        break;
      case "Next 7 days":
        this.count.textContent = weekTasksCount();
        break;
      case "All my tasks":
        this.count.textContent = countTasks();
        break;
      default:
        this.count.textContent = getListTasks(folder.title).length;
        break;
    }
    this.wrapper.appendChild(this.count);
  }
}

export class Sidebar {
  constructor(defaultFolders, userFolders) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("sidebar");

    this.defaultWrapper = document.createElement("div");
    this.defaultWrapper.classList.add("default-wrapper");

    defaultFolders.forEach((folder) => {
      const f = new SidebarFolder(folder);

      switch (folder.title) {
        case "My day":
          f.wrapper.addEventListener("click", displayMyDay);
          break;
        case "Next 7 days":
          f.wrapper.addEventListener("click", displayMyWeek);
          break;
        default:
          f.wrapper.addEventListener("click", displayMyTasks);
          break;
      }

      this.defaultWrapper.appendChild(f.wrapper);
    });

    this.wrapper.appendChild(this.defaultWrapper);

    this.userList = document.createElement("div");
    this.userList.classList.add("user-list");

    this.titleWrapper = document.createElement("div");
    this.titleWrapper.classList.add("title-wrapper");

    this.title = document.createElement("div");
    this.title.textContent = "My lists";
    this.titleWrapper.appendChild(this.title);

    this.icon = document.createElement("i");
    this.icon.classList.add("gg-add");
    this.icon.addEventListener("click", displayListForm);
    this.titleWrapper.appendChild(this.icon);

    this.wrapper.appendChild(this.titleWrapper);
    userFolders.forEach((folder) => {
      const f = new SidebarFolder(folder);
      const removeIcon = document.createElement("i");

      removeIcon.classList.add("gg-remove");
      removeIcon.addEventListener("click", removeUserList);
      f.wrapper.appendChild(removeIcon);
      this.userList.appendChild(f.wrapper);
    });

    this.wrapper.appendChild(this.userList);
  }
}

export class MyDayHeader {
  constructor(welcomeText, message) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("my-day-header");

    this.welcomeText = document.createElement("div");
    this.welcomeText.classList.add("welcome-msg");
    this.welcomeText.textContent = welcomeText;
    this.wrapper.appendChild(this.welcomeText);

    this.message = document.createElement("div");
    this.message.classList.add("header-quote");
    this.message.textContent = message;
    this.wrapper.appendChild(this.message);
  }
}

export class MyDayStatus {
  constructor(date, message) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("my-day-status");

    this.date = document.createElement("div");
    this.date.classList.add("date-wrapper");

    this.weekday = document.createElement("div");
    this.weekday.classList.add("weekday");
    this.weekday.textContent = date.day;
    this.date.appendChild(this.weekday);

    this.weekNumber = document.createElement("div");
    this.weekNumber.classList.add("week-number");
    this.weekNumber.textContent = date.number;
    this.date.appendChild(this.weekNumber);

    this.month = document.createElement("div");
    this.month.classList.add("month");
    this.month.textContent = date.month;
    this.date.appendChild(this.month);
    this.wrapper.appendChild(this.date);

    this.msg = document.createElement("div");
    this.msg.classList.add("my-day-status-msg");
    this.msg.textContent = message;
    this.wrapper.appendChild(this.msg);
  }
}

export class Task {
  constructor(task) {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("task-wrapper", `priority-${task.priority}`);

    let taskId = task.title.toLowerCase().split(" ").join("-");

    this.checkBtn = document.createElement("input");
    this.checkBtn.classList.add("task-checkbox");
    this.checkBtn.type = "checkbox";
    this.checkBtn.id = taskId;
    this.checkBtn.name = taskId;
    this.checkBtn.value = task.title;
    this.checkBtn.addEventListener("click", setTaskComplete);
    this.wrapper.appendChild(this.checkBtn);

    this.title = document.createElement("div");
    this.title.classList.add("task-title");
    this.title.textContent = task.title;
    this.wrapper.appendChild(this.title);

    this.dueDate = document.createElement("div");
    this.dueDate.classList.add("task-due-date");
    this.dueDate.textContent = task.dueDate;
    this.wrapper.appendChild(this.dueDate);

    this.wrapper.addEventListener("click", displayTaskNote);
  }
}

export class ListForm {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "list-form";
    this.form.noValidate = true;

    this.input = document.createElement("input");
    this.input.id = "list-name";
    this.input.name = "list-name";
    this.input.placeholder = "Add list name";
    this.form.appendChild(this.input);

    this.btnWrapper = document.createElement("div");
    this.btnWrapper.classList.add("btn-wrapper");
    this.btnSave = document.createElement("button");
    this.btnSave.id = "add-list-btn";
    this.btnSave.textContent = "Save";
    this.btnSave.addEventListener("click", addFolder);
    this.btnWrapper.appendChild(this.btnSave);

    this.btnCancel = document.createElement("button");
    this.btnCancel.id = "cancel-btn";
    this.btnCancel.name = "cancel-btn";
    this.btnCancel.textContent = "Cancel";
    this.btnCancel.addEventListener("click", removeForm);
    this.btnWrapper.appendChild(this.btnCancel);

    this.form.appendChild(this.btnWrapper);
  }
}

export class TaskForm {
  constructor() {
    this.form = document.createElement("form");
    this.form.id = "task-form";
    this.form.noValidate = true;

    const fields = [
      "Title",
      "Description",
      "DueDate",
      "Priority",
      "Notes",
      "Checklist",
    ];

    fields.forEach((field) => {
      const wrapper = document.createElement("div");
      const id = field.toLowerCase();
      const label = document.createElement("label");
      const input = document.createElement("input");

      wrapper.classList.add("field-wrapper");
      label.setAttribute("for", id);
      label.textContent = field;
      wrapper.appendChild(label);
      input.id = id;
      input.name = id;

      switch (field) {
        case "DueDate": {
          input.type = "date";
          input.min = today();
          input.value = inputDay;
          wrapper.appendChild(input);

          const time = document.createElement("input");
          time.type = "time";
          time.id = "duetime";
          time.name = "duetime";
          time.value = "08:00:00";
          wrapper.appendChild(time);
          break;
        }
        case "Priority": {
          input.type = "number";
          input.min = MIN_PRIORITY;
          input.max = MAX_PRIORITY;
          input.value = MIN_PRIORITY;
          wrapper.appendChild(input);
          break;
        }
        case "Checklist": {
          input.value = getChecklistTitle();
          wrapper.appendChild(input);
          break;
        }
        default:
          wrapper.appendChild(input);
          break;
      }
      this.form.appendChild(wrapper);
    });

    this.btnWrapper = document.createElement("div");
    this.btnSave = document.createElement("button");
    this.btnCancel = document.createElement("button");

    this.btnWrapper.classList.add("btn-wrapper");

    this.btnSave.id = "add-task-btn";
    this.btnSave.textContent = "Save";
    this.btnSave.addEventListener("click", addTask);
    this.btnWrapper.appendChild(this.btnSave);

    this.btnCancel.id = "cancel-btn";
    this.btnCancel.name = "cancel-btn";
    this.btnCancel.textContent = "Cancel";
    this.btnCancel.addEventListener("click", removeForm);
    this.btnWrapper.appendChild(this.btnCancel);

    this.form.appendChild(this.btnWrapper);
  }
}

export class DailyTasks {
  constructor(myTasks) {
    this.wrapper = document.createElement("div");
    this.title = document.createElement("div");

    this.allTasks = myTasks.tasks;
    this.wrapper.classList.add("daily-task-wrapper", "tasks-wrapper");

    this.title.classList.add("day-title");
    this.title.textContent = myTasks.title;
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(new TaskInput().wrapper);

    this.allTasks.forEach((task) => {
      this.wrapper.appendChild(task.wrapper);
    });
  }
}

export class ListTasks extends DailyTasks {
  constructor(myTasks) {
    super(myTasks);
    this.wrapper.classList.add("list-task-wrapper");
    this.title.classList.add("list-title");
  }
}

export class AllTasks extends DailyTasks {
  constructor(myTasks) {
    super(myTasks);
    this.wrapper.classList.add("all-tasks-wrapper");
    this.title.textContent = "My Tasks";
  }
}

export class TaskInput {
  constructor() {
    this.wrapper = document.createElement("div");
    const icon = document.createElement("i");
    const input = document.createElement("input");

    this.wrapper.classList.add("input-wrapper");
    this.wrapper.addEventListener("click", displayTaskForm);

    icon.classList.add("gg-add");
    this.wrapper.appendChild(icon);

    input.classList.add("task-input");
    input.name = "task-input";
    input.placeholder = "Add task";
    this.wrapper.appendChild(input);
  }
}

export const quotes = [
  "Be so good no one can ignore you",
  "Remove doubts with actions",
  "Run your day or your day will run you",
  "What’s your plan for today?",
  "This is your private space",
  "What will you accomplish today?",
  "Let's make an impact",
  "You can make magic happen",
];

export let defaultFolders = [
  {
    title: "My day",
    iconClass: "gg-media-live",
  },
  {
    title: "Next 7 days",
    iconClass: "gg-calendar-due",
  },
  {
    title: "All my tasks",
    iconClass: "gg-list",
  },
];

export { settingIcon };
