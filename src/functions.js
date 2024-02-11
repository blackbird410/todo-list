import {
  Sidebar,
  ListForm,
  TaskForm,
  Task,
  TaskInput,
  DailyTasks,
  ListTasks,
  AllTasks,
  MyDayHeader,
  MyDayStatus,
  defaultFolders,
  quotes,
  settingIcon,
} from "./data";

const DATE_STRING_BOUND = 24;

export const countTasks = () => getData("tasks").length;
export const populateStorage = () => {
  const myTasks = JSON.stringify([]);
  localStorage.setItem("tasks", myTasks);

  const userFolders = JSON.stringify([]);
  localStorage.setItem("userFolders", userFolders);
};

if (!localStorage.getItem("tasks")) populateStorage();

const getData = (name) => {
  const backToArray = JSON.parse(localStorage.getItem(name));
  return Array.isArray(backToArray) ? backToArray : [];
};

const setData = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));

export function displayTaskNote(e) {
  let tasks = getData("tasks");

  if (e.currentTarget.querySelector(".task-note") == null) {
    let i;
    let targetTitle = e.currentTarget.querySelector(".task-title").textContent;

    // FIXME: Use JavaScript higher order function to complete this task
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].title == targetTitle) {
        const desc = document.createElement("div");
        desc.classList.add("task-description");
        desc.textContent = tasks[i].description;

        const note = document.createElement("div");
        note.classList.add("task-note");
        note.textContent = tasks[i].notes;

        e.currentTarget.appendChild(desc);
        e.currentTarget.appendChild(note);
        break;
      }
    }
  } else {
    e.currentTarget.querySelector(".task-description").remove();
    e.currentTarget.querySelector(".task-note").remove();
  }
}

export const getChecklistTitle = () => {
  let element = document.querySelector(".list-title");
  return element != null ? element.textContent : "";
};

export const displayMain = () => {
  const mainIcon = document.createElement("img");

  populateUserList();
  mainIcon.src = settingIcon;
  mainIcon.id = "setting-icon";
  mainIcon.addEventListener("mouseover", displaySidebar);
  document.body.appendChild(mainIcon);
  displayMyDay();
};

export const displayMyDay = () => {
  const previousContent = document.querySelector("#content");
  const content = document.createElement("div");
  const welcomeMsg = getWelcomeMessage();
  const quote = getDailyQuote(quotes);
  const header = new MyDayHeader(welcomeMsg, quote);
  const date = getDate();
  const myDayStatus = new MyDayStatus(date, getDayStatus());
  const tasksWrapper = document.createElement("div");
  const myDay = new Date().toString().slice(0, 24);
  const myDayTasks = getMyDayTasks(myDay);
  const inputWrapper = new TaskInput().wrapper;

  if (previousContent != null) previousContent.remove();

  content.id = "content";
  content.appendChild(header.wrapper);
  content.appendChild(myDayStatus.wrapper);
  tasksWrapper.classList.add("tasks-wrapper");

  myDayTasks.forEach((task) => {
    task.dueDate.textContent = new Date(
      task.dueDate.textContent,
    ).toLocaleTimeString();
    tasksWrapper.appendChild(task.wrapper);
  });

  content.appendChild(tasksWrapper);
  content.appendChild(inputWrapper);
  document.body.appendChild(content);
  addTaskbarListener();
};

const addTaskbarListener = () => {
  const content = document.querySelector("#content");

  content.addEventListener("mouseover", () => {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar != null) sidebar.remove();
  });
};

export const displayMyWeek = () => {
  const previousContent = document.querySelector("#content");
  const content = document.createElement("div");
  const weekTasks = getWeekTasks();
  let i = 1;

  if (previousContent != null) previousContent.remove();
  content.id = "content";

  weekTasks.forEach((day) => {
    const dailyTasks = new DailyTasks(day);
    dailyTasks.wrapper.id = `day-${i}`;
    i++;
    content.appendChild(dailyTasks.wrapper);
  });

  content.classList.add("grid-row", "my-week");
  document.body.appendChild(content);
  addTaskbarListener();
};

const getWeekTasks = () => {
  let currentDate;
  let weekTasks = [];
  let d;

  // FIXME: Use JavaScript higher function to complete this task
  for (d = 0; d < 7; d++) {
    currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + d);
    currentDate = currentDate.toString().slice(0, DATE_STRING_BOUND);
    weekTasks.push({
      title: getDay(currentDate),
      tasks: getMyDayTasks(currentDate),
    });
  }
  return weekTasks;
};

export const weekTasksCount = () => {
  let endDate = new Date();
  let tasks = getData("tasks");
  let count = 0;

  endDate.setDate(endDate.getDate() + 6);
  tasks.forEach((task) => {
    if (new Date(task.dueDate) < endDate) count++;
  });
  return count;
};

export const displayMyTasks = () => {
  const previousContent = document.querySelector("#content");
  const content = document.createElement("div");
  let allTasks = [];
  let tasks = getData("tasks");

  if (previousContent != null) previousContent.remove();

  content.id = "content";
  tasks.forEach((task) => {
    allTasks.push(new Task(task));
  });

  allTasks = new AllTasks({
    title: "My tasks",
    tasks: allTasks,
  });
  content.appendChild(allTasks.wrapper);
  document.body.appendChild(content);
  addTaskbarListener();
};

export const displayListTasks = (e) => {
  let target =
    e.currentTarget.parentElement.querySelector(".folder-title").textContent;

  if (
    target != "My day" &&
    target != "Next 7 days" &&
    target != "All my tasks"
  ) {
    let listTasks = getListTasks(target);
    const previousContent = document.querySelector("#content");
    const content = document.createElement("div");

    if (previousContent != null) previousContent.remove();
    content.id = "content";
    listTasks = {
      title: target,
      tasks: listTasks,
    };
    const checkList = new ListTasks(listTasks);
    content.appendChild(checkList.wrapper);
    document.body.appendChild(content);
    addTaskbarListener();
  }
};

export const getListTasks = (list) => {
  let listTasks = [];
  let tasks = getData("tasks");

  tasks.forEach((task) => {
    if (task.checklist == list) listTasks.push(new Task(task));
  });
  return listTasks;
};

const removeUserList = (e) => {
  const target =
    e.currentTarget.parentElement.querySelector(".folder-title").textContent;
  let userFolders = getData("userFolders");
  let tasks = getData("tasks");
  let i;

  // FIXME: Use JavaScript higher order function to complete this task
  for (i = 0; i < userFolders.length; i++) {
    if (userFolders[i].title == target) {
      userFolders.splice(i, 1);
      i--;
      e.currentTarget.parentElement.remove();
      break;
    }
  }

  // FIXME: Use JavaScript higher order function to complete this task
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].checklist == target) {
      tasks.splice(i, 1);
      i--;
    }
  }

  setData("userFolders", userFolders);
  setData("tasks", tasks);
  refreshPage();
  document.querySelector(".sidebar").remove();
  displaySidebar();
};

const populateUserList = () => {
  let found;
  let tasks = getData("tasks");
  let userFolders = getData("userFolders");
  let i;

  tasks.forEach((task) => {
    found = false;
    for (i = 0; i < userFolders.length; i++) {
      if (userFolders[i].title == task.checklist) {
        found = true;
        break;
      }
    }

    if (!found && task.checklist != "") {
      userFolders.push({
        title: task.checklist,
        iconClass: "",
      });
    }
  });

  setData("userFolders", userFolders);
};

export const addTask = (e) => {
  const title = document.querySelector("form #title").value;
  let date = document.querySelector("form #duedate").value;
  let time = document.querySelector("form #duetime").value;
  let tasks = getData("tasks");

  date = new Date(date + " " + time).toString().slice(0, 24);
  e.preventDefault();
  if (title != "") {
    tasks.push({
      title: title,
      description: document.querySelector("form #description").value,
      dueDate: date,
      priority: document.querySelector("form #priority").value,
      notes: document.querySelector("form #notes").value,
      checklist: document.querySelector("form #checklist").value,
    });

    setData("tasks", tasks);
    refreshPage();
    removeForm();
  }
};

const refreshPage = () => {
  if (document.querySelector(".my-week")) displayMyWeek();
  else if (document.querySelector(".all-tasks-wrapper")) displayMyTasks();
  else displayMyDay();
};

const addFolder = () => {
  const folderName = document.querySelector("#list-name").value;
  let userFolders = getData("userFolders");
  let found = false;

  // FIXME: Use JavaScript higher order function find to reformat this task
  for (let i = 0; i < userFolders.length; i++) {
    if (userFolders[i].title == folderName) {
      found = true;
      break;
    }
  }

  if (folderName != "" && !found) {
    userFolders.push({
      title: folderName,
      iconClass: "",
    });
    setData("userFolders", userFolders);
    document.querySelector(".sidebar").remove();
    displaySidebar();
    removeForm();
  }
};

const removeForm = () => {
  if (document.querySelector("form") != null)
    document.querySelector("form").remove();
};

const displayListForm = () => {
  if (document.querySelector("#list-form") == null)
    document.body.appendChild(new ListForm().form);
};

const displaySidebar = () => {
  if (document.querySelector(".sidebar") == null) {
    populateUserList();
    const sidebar = new Sidebar(defaultFolders, getData("userFolders"));
    document.body.appendChild(sidebar.wrapper);
  }
};

export const displayTaskForm = (e) => {
  if (document.querySelector("#task-form") == null) {
    setTheDay(e);
    const taskForm = new TaskForm();
    document.body.appendChild(taskForm.form);
  }
};

const formatTasks = (tasks) => {
  // Tranform the tasks objects into DOM elements
  let taskList = [];
  tasks.forEach((task) => {
    taskList.push(new Task(task));
  });
  return taskList;
};

const sortTasks = (a) => {
  let nTasks = a.length;
  let i;
  let j;

  // FIXME: Use JavaScript higer order functions to complete this task
  for (i = 0; i < nTasks; i++) {
    for (j = i + 1; j < nTasks; j++) {
      if (new Date(a[i].dueDate) > new Date(a[j].dueDate)) swap(a[i], a[j]);
    }
  }
  return a;
};

const swap = (a, b) => {
  let temp = "";

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
};

const getDayStatus = () => {
  const n = getMyDayTasks(new Date()).length;
  switch (n) {
    case 0:
      return "You have no event scheduled for today";
    case 1:
      return "You have one event scheduled for today";
    default:
      return `You have ${n} events scheduled for today`;
  }
};

const getMyDayTasks = (date) => {
  let myDayTasks = [];
  let tasks = getData("tasks");

  tasks.forEach((task) => {
    if (
      new Date(task.dueDate).toLocaleDateString() ==
      new Date(date).toLocaleDateString()
    )
      myDayTasks.push(task);
  });
  return formatTasks(sortTasks(myDayTasks));
};

const getDate = () => {
  const d = new Date().toDateString().split(" ").splice(0, 3);

  return {
    day: d[0],
    number: Number(d[2]),
    month: d[1],
  };
};

const getDay = (d) => {
  let day = new Date(d).toDateString().split(" ").splice(0, 3)[0];

  switch (day) {
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
};

const getDailyQuote = (quotes) =>
  quotes[Math.floor(Math.random() * quotes.length)];

const getWelcomeMessage = () => `Good ${getPeriodOfTheDay()}`;

const getPeriodOfTheDay = () => {
  const localeDate = new Date();
  const localeTime = localeDate.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let period = localeTime.split(" ")[1];

  if (period == "AM") return "morning";
  else if (Number(localeTime.split(":")[0]) < 8) return "afternoon";
  else return "night";
};

const removeTask = (taskTitle) => {
  let tasks = getData("tasks");

  // FIXME: Use JavaScript higher function to complete this task
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == taskTitle) {
      tasks.splice(i, 1);
      break;
    }
  }

  setData("tasks", tasks);
};

const setTaskComplete = (e) => {
  const target = e.currentTarget.parentElement;
  const targetTask = target.querySelector(".task-title").textContent;

  target.classList.add("task-completed");
  removeTask(targetTask);
  target.remove();
  refreshPage();
};

const today = () => {
  let d = new Date().toLocaleDateString().split("/");

  return `${d[2]}-${d[0] < 10 ? `0${d[0]}` : d[0]}-${d[1] < 10 ? `0${d[1]}` : d[1]}`;
};

export let inputDay = "";
const setTheDay = (e) => {
  let d = e.currentTarget.parentElement.querySelector(".day-title");

  if (d != null) {
    let currentDate = new Date();

    d = Number(e.currentTarget.parentElement.id.split("-")[1]) - 1;
    currentDate.setDate(currentDate.getDate() + d);
    d = currentDate.toLocaleDateString().split("/");
    inputDay = `${d[2]}-${d[0] < 10 ? `0${d[0]}` : d[0]}-${d[1] < 10 ? `0${d[1]}` : d[1]}`;
  } else inputDay = today();
};

export {
  removeUserList,
  addFolder,
  removeForm,
  displayListForm,
  displaySidebar,
  getMyDayTasks,
  setTaskComplete,
  today,
};
