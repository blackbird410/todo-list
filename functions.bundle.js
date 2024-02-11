/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/data.js":
      /*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllTasks: () => (/* binding */ AllTasks),\n/* harmony export */   DailyTasks: () => (/* binding */ DailyTasks),\n/* harmony export */   ListForm: () => (/* binding */ ListForm),\n/* harmony export */   ListTasks: () => (/* binding */ ListTasks),\n/* harmony export */   MyDayHeader: () => (/* binding */ MyDayHeader),\n/* harmony export */   MyDayStatus: () => (/* binding */ MyDayStatus),\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar),\n/* harmony export */   SidebarFolder: () => (/* binding */ SidebarFolder),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskForm: () => (/* binding */ TaskForm),\n/* harmony export */   TaskInput: () => (/* binding */ TaskInput),\n/* harmony export */   defaultFolders: () => (/* binding */ defaultFolders),\n/* harmony export */   quotes: () => (/* binding */ quotes),\n/* harmony export */   settingIcon: () => (/* reexport default export from named module */ _setting_png__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _setting_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.png */ "./src/setting.png");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");\n\n\n\nconst MIN_PRIORITY = 1;\nconst MAX_PRIORITY = 3;\n\nclass SidebarFolder {\n  constructor(folder) {\n    this.wrapper = document.createElement("div");\n    this.wrapper.classList.add("folder-wrapper");\n\n    this.icon = document.createElement("i");\n    if (folder.iconClass != "") this.icon.classList.add(folder.iconClass);\n    else this.icon.classList.add("gg-user-list");\n\n    this.icon.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n    this.wrapper.appendChild(this.icon);\n\n    this.title = document.createElement("div");\n    this.title.classList.add("folder-title");\n    this.title.textContent = folder.title;\n    this.title.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n    this.wrapper.appendChild(this.title);\n\n    this.count = document.createElement("div");\n    this.count.classList.add("file-count");\n    this.count.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n\n    switch (folder.title) {\n      case "My day":\n        this.count.textContent = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getMyDayTasks)(new Date()).length;\n        break;\n      case "Next 7 days":\n        this.count.textContent = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.weekTasksCount)();\n        break;\n      case "All my tasks":\n        this.count.textContent = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.countTasks)();\n        break;\n      default:\n        this.count.textContent = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getListTasks)(folder.title).length;\n        break;\n    }\n    this.wrapper.appendChild(this.count);\n  }\n}\n\nclass Sidebar {\n  constructor(defaultFolders, userFolders) {\n    this.wrapper = document.createElement("div");\n    this.wrapper.classList.add("sidebar");\n\n    this.defaultWrapper = document.createElement("div");\n    this.defaultWrapper.classList.add("default-wrapper");\n\n    defaultFolders.forEach((folder) => {\n      const f = new SidebarFolder(folder);\n\n      switch (folder.title) {\n        case "My day":\n          f.wrapper.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayMyDay);\n          break;\n        case "Next 7 days":\n          f.wrapper.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayMyWeek);\n          break;\n        default:\n          f.wrapper.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayMyTasks);\n          break;\n      }\n\n      this.defaultWrapper.appendChild(f.wrapper);\n    });\n\n    this.wrapper.appendChild(this.defaultWrapper);\n\n    this.userList = document.createElement("div");\n    this.userList.classList.add("user-list");\n\n    this.titleWrapper = document.createElement("div");\n    this.titleWrapper.classList.add("title-wrapper");\n\n    this.title = document.createElement("div");\n    this.title.textContent = "My lists";\n    this.titleWrapper.appendChild(this.title);\n\n    this.icon = document.createElement("i");\n    this.icon.classList.add("gg-add");\n    this.icon.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayListForm);\n    this.titleWrapper.appendChild(this.icon);\n\n    this.wrapper.appendChild(this.titleWrapper);\n    userFolders.forEach((folder) => {\n      const f = new SidebarFolder(folder);\n      const removeIcon = document.createElement("i");\n\n      removeIcon.classList.add("gg-remove");\n      removeIcon.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.removeUserList);\n      f.wrapper.appendChild(removeIcon);\n      this.userList.appendChild(f.wrapper);\n    });\n\n    this.wrapper.appendChild(this.userList);\n  }\n}\n\nclass MyDayHeader {\n  constructor(welcomeText, message) {\n    this.wrapper = document.createElement("div");\n    this.wrapper.classList.add("my-day-header");\n\n    this.welcomeText = document.createElement("div");\n    this.welcomeText.classList.add("welcome-msg");\n    this.welcomeText.textContent = welcomeText;\n    this.wrapper.appendChild(this.welcomeText);\n\n    this.message = document.createElement("div");\n    this.message.classList.add("header-quote");\n    this.message.textContent = message;\n    this.wrapper.appendChild(this.message);\n  }\n}\n\nclass MyDayStatus {\n  constructor(date, message) {\n    this.wrapper = document.createElement("div");\n    this.wrapper.classList.add("my-day-status");\n\n    this.date = document.createElement("div");\n    this.date.classList.add("date-wrapper");\n\n    this.weekday = document.createElement("div");\n    this.weekday.classList.add("weekday");\n    this.weekday.textContent = date.day;\n    this.date.appendChild(this.weekday);\n\n    this.weekNumber = document.createElement("div");\n    this.weekNumber.classList.add("week-number");\n    this.weekNumber.textContent = date.number;\n    this.date.appendChild(this.weekNumber);\n\n    this.month = document.createElement("div");\n    this.month.classList.add("month");\n    this.month.textContent = date.month;\n    this.date.appendChild(this.month);\n    this.wrapper.appendChild(this.date);\n\n    this.msg = document.createElement("div");\n    this.msg.classList.add("my-day-status-msg");\n    this.msg.textContent = message;\n    this.wrapper.appendChild(this.msg);\n  }\n}\n\nclass Task {\n  constructor(task) {\n    this.wrapper = document.createElement("div");\n    this.wrapper.classList.add("task-wrapper", `priority-${task.priority}`);\n\n    let taskId = task.title.toLowerCase().split(" ").join("-");\n\n    this.checkBtn = document.createElement("input");\n    this.checkBtn.classList.add("task-checkbox");\n    this.checkBtn.type = "checkbox";\n    this.checkBtn.id = taskId;\n    this.checkBtn.name = taskId;\n    this.checkBtn.value = task.title;\n    this.checkBtn.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.setTaskComplete);\n    this.wrapper.appendChild(this.checkBtn);\n\n    this.title = document.createElement("div");\n    this.title.classList.add("task-title");\n    this.title.textContent = task.title;\n    this.wrapper.appendChild(this.title);\n\n    this.dueDate = document.createElement("div");\n    this.dueDate.classList.add("task-due-date");\n    this.dueDate.textContent = task.dueDate;\n    this.wrapper.appendChild(this.dueDate);\n\n    this.wrapper.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayTaskNote);\n  }\n}\n\nclass ListForm {\n  constructor() {\n    this.form = document.createElement("form");\n    this.form.id = "list-form";\n    this.form.noValidate = true;\n\n    this.input = document.createElement("input");\n    this.input.id = "list-name";\n    this.input.name = "list-name";\n    this.input.placeholder = "Add list name";\n    this.form.appendChild(this.input);\n\n    this.btnWrapper = document.createElement("div");\n    this.btnWrapper.classList.add("btn-wrapper");\n    this.btnSave = document.createElement("button");\n    this.btnSave.id = "add-list-btn";\n    this.btnSave.textContent = "Save";\n    this.btnSave.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.addFolder);\n    this.btnWrapper.appendChild(this.btnSave);\n\n    this.btnCancel = document.createElement("button");\n    this.btnCancel.id = "cancel-btn";\n    this.btnCancel.name = "cancel-btn";\n    this.btnCancel.textContent = "Cancel";\n    this.btnCancel.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.removeForm);\n    this.btnWrapper.appendChild(this.btnCancel);\n\n    this.form.appendChild(this.btnWrapper);\n  }\n}\n\nclass TaskForm {\n  constructor() {\n    this.form = document.createElement("form");\n    this.form.id = "task-form";\n    this.form.noValidate = true;\n\n    const fields = [\n      "Title",\n      "Description",\n      "DueDate",\n      "Priority",\n      "Notes",\n      "Checklist",\n    ];\n\n    fields.forEach((field) => {\n      const wrapper = document.createElement("div");\n      const id = field.toLowerCase();\n      const label = document.createElement("label");\n      const input = document.createElement("input");\n\n      wrapper.classList.add("field-wrapper");\n      label.setAttribute("for", id);\n      label.textContent = field;\n      wrapper.appendChild(label);\n      input.id = id;\n      input.name = id;\n\n      switch (field) {\n        case "DueDate": {\n          input.type = "date";\n          input.min = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.today)();\n          input.value = _functions__WEBPACK_IMPORTED_MODULE_1__.inputDay;\n          wrapper.appendChild(input);\n\n          const time = document.createElement("input");\n          time.type = "time";\n          time.id = "duetime";\n          time.name = "duetime";\n          time.value = "08:00:00";\n          wrapper.appendChild(time);\n          break;\n        }\n        case "Priority": {\n          input.type = "number";\n          input.min = MIN_PRIORITY;\n          input.max = MAX_PRIORITY;\n          input.value = MIN_PRIORITY;\n          wrapper.appendChild(input);\n          break;\n        }\n        case "Checklist": {\n          input.value = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getChecklistTitle)();\n          wrapper.appendChild(input);\n          break;\n        }\n        default:\n          wrapper.appendChild(input);\n          break;\n      }\n      this.form.appendChild(wrapper);\n    });\n\n    this.btnWrapper = document.createElement("div");\n    this.btnSave = document.createElement("button");\n    this.btnCancel = document.createElement("button");\n\n    this.btnWrapper.classList.add("btn-wrapper");\n\n    this.btnSave.id = "add-task-btn";\n    this.btnSave.textContent = "Save";\n    this.btnSave.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.addTask);\n    this.btnWrapper.appendChild(this.btnSave);\n\n    this.btnCancel.id = "cancel-btn";\n    this.btnCancel.name = "cancel-btn";\n    this.btnCancel.textContent = "Cancel";\n    this.btnCancel.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.removeForm);\n    this.btnWrapper.appendChild(this.btnCancel);\n\n    this.form.appendChild(this.btnWrapper);\n  }\n}\n\nclass DailyTasks {\n  constructor(myTasks) {\n    this.wrapper = document.createElement("div");\n    this.title = document.createElement("div");\n\n    this.allTasks = myTasks.tasks;\n    this.wrapper.classList.add("daily-task-wrapper", "tasks-wrapper");\n\n    this.title.classList.add("day-title");\n    this.title.textContent = myTasks.title;\n    this.wrapper.appendChild(this.title);\n    this.wrapper.appendChild(new TaskInput().wrapper);\n\n    this.allTasks.forEach((task) => {\n      this.wrapper.appendChild(task.wrapper);\n    });\n  }\n}\n\nclass ListTasks extends DailyTasks {\n  constructor(myTasks) {\n    super(myTasks);\n    this.wrapper.classList.add("list-task-wrapper");\n    this.title.classList.add("list-title");\n  }\n}\n\nclass AllTasks extends DailyTasks {\n  constructor(myTasks) {\n    super(myTasks);\n    this.wrapper.classList.add("all-tasks-wrapper");\n    this.title.textContent = "My Tasks";\n  }\n}\n\nclass TaskInput {\n  constructor() {\n    this.wrapper = document.createElement("div");\n    const icon = document.createElement("i");\n    const input = document.createElement("input");\n\n    this.wrapper.classList.add("input-wrapper");\n    this.wrapper.addEventListener("click", _functions__WEBPACK_IMPORTED_MODULE_1__.displayTaskForm);\n\n    icon.classList.add("gg-add");\n    this.wrapper.appendChild(icon);\n\n    input.classList.add("task-input");\n    input.name = "task-input";\n    input.placeholder = "Add task";\n    this.wrapper.appendChild(input);\n  }\n}\n\nconst quotes = [\n  "Be so good no one can ignore you",\n  "Remove doubts with actions",\n  "Run your day or your day will run you",\n  "What’s your plan for today?",\n  "This is your private space",\n  "What will you accomplish today?",\n  "Let\'s make an impact",\n  "You can make magic happen",\n];\n\nlet defaultFolders = [\n  {\n    title: "My day",\n    iconClass: "gg-media-live",\n  },\n  {\n    title: "Next 7 days",\n    iconClass: "gg-calendar-due",\n  },\n  {\n    title: "All my tasks",\n    iconClass: "gg-list",\n  },\n];\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data.js?',
        );

        /***/
      },

    /***/ "./src/functions.js":
      /*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFolder: () => (/* binding */ addFolder),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   countTasks: () => (/* binding */ countTasks),\n/* harmony export */   displayListForm: () => (/* binding */ displayListForm),\n/* harmony export */   displayListTasks: () => (/* binding */ displayListTasks),\n/* harmony export */   displayMain: () => (/* binding */ displayMain),\n/* harmony export */   displayMyDay: () => (/* binding */ displayMyDay),\n/* harmony export */   displayMyTasks: () => (/* binding */ displayMyTasks),\n/* harmony export */   displayMyWeek: () => (/* binding */ displayMyWeek),\n/* harmony export */   displaySidebar: () => (/* binding */ displaySidebar),\n/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),\n/* harmony export */   displayTaskNote: () => (/* binding */ displayTaskNote),\n/* harmony export */   getChecklistTitle: () => (/* binding */ getChecklistTitle),\n/* harmony export */   getListTasks: () => (/* binding */ getListTasks),\n/* harmony export */   getMyDayTasks: () => (/* binding */ getMyDayTasks),\n/* harmony export */   inputDay: () => (/* binding */ inputDay),\n/* harmony export */   populateStorage: () => (/* binding */ populateStorage),\n/* harmony export */   removeForm: () => (/* binding */ removeForm),\n/* harmony export */   removeUserList: () => (/* binding */ removeUserList),\n/* harmony export */   setTaskComplete: () => (/* binding */ setTaskComplete),\n/* harmony export */   today: () => (/* binding */ today),\n/* harmony export */   weekTasksCount: () => (/* binding */ weekTasksCount)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");\n\n\nconst DATE_STRING_BOUND = 24;\n\nconst countTasks = () => getData("tasks").length;\nconst populateStorage = () => {\n  const myTasks = JSON.stringify([]);\n  localStorage.setItem("tasks", myTasks);\n\n  const userFolders = JSON.stringify([]);\n  localStorage.setItem("userFolders", userFolders);\n};\n\nif (!localStorage.getItem("tasks")) populateStorage();\n\nconst getData = (name) => {\n  const backToArray = JSON.parse(localStorage.getItem(name));\n  return Array.isArray(backToArray) ? backToArray : [];\n};\n\nconst setData = (name, data) =>\n  localStorage.setItem(name, JSON.stringify(data));\n\nfunction displayTaskNote(e) {\n  let tasks = getData("tasks");\n\n  if (e.currentTarget.querySelector(".task-note") == null) {\n    let i;\n    let targetTitle = e.currentTarget.querySelector(".task-title").textContent;\n\n    // FIXME: Use JavaScript higher order function to complete this task\n    for (i = 0; i < tasks.length; i++) {\n      if (tasks[i].title == targetTitle) {\n        const desc = document.createElement("div");\n        desc.classList.add("task-description");\n        desc.textContent = tasks[i].description;\n\n        const note = document.createElement("div");\n        note.classList.add("task-note");\n        note.textContent = tasks[i].notes;\n\n        e.currentTarget.appendChild(desc);\n        e.currentTarget.appendChild(note);\n        break;\n      }\n    }\n  } else {\n    e.currentTarget.querySelector(".task-description").remove();\n    e.currentTarget.querySelector(".task-note").remove();\n  }\n}\n\nconst getChecklistTitle = () => {\n  let element = document.querySelector(".list-title");\n  return element != null ? element.textContent : "";\n};\n\nconst displayMain = () => {\n  const mainIcon = document.createElement("img");\n\n  populateUserList();\n  mainIcon.src = _data__WEBPACK_IMPORTED_MODULE_0__.settingIcon;\n  mainIcon.id = "setting-icon";\n  mainIcon.addEventListener("mouseover", displaySidebar);\n  document.body.appendChild(mainIcon);\n  displayMyDay();\n};\n\nconst displayMyDay = () => {\n  const previousContent = document.querySelector("#content");\n  const content = document.createElement("div");\n  const welcomeMsg = getWelcomeMessage();\n  const quote = getDailyQuote(_data__WEBPACK_IMPORTED_MODULE_0__.quotes);\n  const header = new _data__WEBPACK_IMPORTED_MODULE_0__.MyDayHeader(welcomeMsg, quote);\n  const date = getDate();\n  const myDayStatus = new _data__WEBPACK_IMPORTED_MODULE_0__.MyDayStatus(date, getDayStatus());\n  const tasksWrapper = document.createElement("div");\n  const myDay = new Date().toString().slice(0, 24);\n  const myDayTasks = getMyDayTasks(myDay);\n  const inputWrapper = new _data__WEBPACK_IMPORTED_MODULE_0__.TaskInput().wrapper;\n\n  if (previousContent != null) previousContent.remove();\n\n  content.id = "content";\n  content.appendChild(header.wrapper);\n  content.appendChild(myDayStatus.wrapper);\n  tasksWrapper.classList.add("tasks-wrapper");\n\n  myDayTasks.forEach((task) => {\n    task.dueDate.textContent = new Date(\n      task.dueDate.textContent,\n    ).toLocaleTimeString();\n    tasksWrapper.appendChild(task.wrapper);\n  });\n\n  content.appendChild(tasksWrapper);\n  content.appendChild(inputWrapper);\n  document.body.appendChild(content);\n  addTaskbarListener();\n};\n\nconst addTaskbarListener = () => {\n  const content = document.querySelector("#content");\n\n  content.addEventListener("mouseover", () => {\n    let sidebar = document.querySelector(".sidebar");\n    if (sidebar != null) sidebar.remove();\n  });\n};\n\nconst displayMyWeek = () => {\n  const previousContent = document.querySelector("#content");\n  const content = document.createElement("div");\n  const weekTasks = getWeekTasks();\n  let i = 1;\n\n  if (previousContent != null) previousContent.remove();\n  content.id = "content";\n\n  weekTasks.forEach((day) => {\n    const dailyTasks = new _data__WEBPACK_IMPORTED_MODULE_0__.DailyTasks(day);\n    dailyTasks.wrapper.id = `day-${i}`;\n    i++;\n    content.appendChild(dailyTasks.wrapper);\n  });\n\n  content.classList.add("grid-row", "my-week");\n  document.body.appendChild(content);\n  addTaskbarListener();\n};\n\nconst getWeekTasks = () => {\n  let currentDate;\n  let weekTasks = [];\n  let d;\n\n  // FIXME: Use JavaScript higher function to complete this task\n  for (d = 0; d < 7; d++) {\n    currentDate = new Date();\n    currentDate.setDate(currentDate.getDate() + d);\n    currentDate = currentDate.toString().slice(0, DATE_STRING_BOUND);\n    weekTasks.push({\n      title: getDay(currentDate),\n      tasks: getMyDayTasks(currentDate),\n    });\n  }\n  return weekTasks;\n};\n\nconst weekTasksCount = () => {\n  let endDate = new Date();\n  let tasks = getData("tasks");\n  let count = 0;\n\n  endDate.setDate(endDate.getDate() + 6);\n  tasks.forEach((task) => {\n    if (new Date(task.dueDate) < endDate) count++;\n  });\n  return count;\n};\n\nconst displayMyTasks = () => {\n  const previousContent = document.querySelector("#content");\n  const content = document.createElement("div");\n  let allTasks = [];\n  let tasks = getData("tasks");\n\n  if (previousContent != null) previousContent.remove();\n\n  content.id = "content";\n  tasks.forEach((task) => {\n    allTasks.push(new _data__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n  });\n\n  allTasks = new _data__WEBPACK_IMPORTED_MODULE_0__.AllTasks({\n    title: "My tasks",\n    tasks: allTasks,\n  });\n  content.appendChild(allTasks.wrapper);\n  document.body.appendChild(content);\n  addTaskbarListener();\n};\n\nconst displayListTasks = (e) => {\n  let target =\n    e.currentTarget.parentElement.querySelector(".folder-title").textContent;\n\n  if (\n    target != "My day" &&\n    target != "Next 7 days" &&\n    target != "All my tasks"\n  ) {\n    let listTasks = getListTasks(target);\n    const previousContent = document.querySelector("#content");\n    const content = document.createElement("div");\n\n    if (previousContent != null) previousContent.remove();\n    content.id = "content";\n    listTasks = {\n      title: target,\n      tasks: listTasks,\n    };\n    const checkList = new _data__WEBPACK_IMPORTED_MODULE_0__.ListTasks(listTasks);\n    content.appendChild(checkList.wrapper);\n    document.body.appendChild(content);\n    addTaskbarListener();\n  }\n};\n\nconst getListTasks = (list) => {\n  let listTasks = [];\n  let tasks = getData("tasks");\n\n  tasks.forEach((task) => {\n    if (task.checklist == list) listTasks.push(new _data__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n  });\n  return listTasks;\n};\n\nconst removeUserList = (e) => {\n  const target =\n    e.currentTarget.parentElement.querySelector(".folder-title").textContent;\n  let userFolders = getData("userFolders");\n  let tasks = getData("tasks");\n  let i;\n\n  // FIXME: Use JavaScript higher order function to complete this task\n  for (i = 0; i < userFolders.length; i++) {\n    if (userFolders[i].title == target) {\n      userFolders.splice(i, 1);\n      i--;\n      e.currentTarget.parentElement.remove();\n      break;\n    }\n  }\n\n  // FIXME: Use JavaScript higher order function to complete this task\n  for (i = 0; i < tasks.length; i++) {\n    if (tasks[i].checklist == target) {\n      tasks.splice(i, 1);\n      i--;\n    }\n  }\n\n  setData("userFolders", userFolders);\n  setData("tasks", tasks);\n  refreshPage();\n  document.querySelector(".sidebar").remove();\n  displaySidebar();\n};\n\nconst populateUserList = () => {\n  let found;\n  let tasks = getData("tasks");\n  let userFolders = getData("userFolders");\n  let i;\n\n  tasks.forEach((task) => {\n    found = false;\n    for (i = 0; i < userFolders.length; i++) {\n      if (userFolders[i].title == task.checklist) {\n        found = true;\n        break;\n      }\n    }\n\n    if (!found && task.checklist != "") {\n      userFolders.push({\n        title: task.checklist,\n        iconClass: "",\n      });\n    }\n  });\n\n  setData("userFolders", userFolders);\n};\n\nconst addTask = (e) => {\n  const title = document.querySelector("form #title").value;\n  let date = document.querySelector("form #duedate").value;\n  let time = document.querySelector("form #duetime").value;\n  let tasks = getData("tasks");\n\n  date = new Date(date + " " + time).toString().slice(0, 24);\n  e.preventDefault();\n  if (title != "") {\n    tasks.push({\n      title: title,\n      description: document.querySelector("form #description").value,\n      dueDate: date,\n      priority: document.querySelector("form #priority").value,\n      notes: document.querySelector("form #notes").value,\n      checklist: document.querySelector("form #checklist").value,\n    });\n\n    setData("tasks", tasks);\n    refreshPage();\n    removeForm();\n  }\n};\n\nconst refreshPage = () => {\n  if (document.querySelector(".my-week")) displayMyWeek();\n  else if (document.querySelector(".all-tasks-wrapper")) displayMyTasks();\n  else displayMyDay();\n};\n\nconst addFolder = () => {\n  const folderName = document.querySelector("#list-name").value;\n  let userFolders = getData("userFolders");\n  let found = false;\n\n  // FIXME: Use JavaScript higher order function find to reformat this task\n  for (let i = 0; i < userFolders.length; i++) {\n    if (userFolders[i].title == folderName) {\n      found = true;\n      break;\n    }\n  }\n\n  if (folderName != "" && !found) {\n    userFolders.push({\n      title: folderName,\n      iconClass: "",\n    });\n    setData("userFolders", userFolders);\n    document.querySelector(".sidebar").remove();\n    displaySidebar();\n    removeForm();\n  }\n};\n\nconst removeForm = () => {\n  if (document.querySelector("form") != null)\n    document.querySelector("form").remove();\n};\n\nconst displayListForm = () => {\n  if (document.querySelector("#list-form") == null)\n    document.body.appendChild(new _data__WEBPACK_IMPORTED_MODULE_0__.ListForm().form);\n};\n\nconst displaySidebar = () => {\n  if (document.querySelector(".sidebar") == null) {\n    populateUserList();\n    const sidebar = new _data__WEBPACK_IMPORTED_MODULE_0__.Sidebar(_data__WEBPACK_IMPORTED_MODULE_0__.defaultFolders, getData("userFolders"));\n    document.body.appendChild(sidebar.wrapper);\n  }\n};\n\nconst displayTaskForm = (e) => {\n  if (document.querySelector("#task-form") == null) {\n    setTheDay(e);\n    const taskForm = new _data__WEBPACK_IMPORTED_MODULE_0__.TaskForm();\n    document.body.appendChild(taskForm.form);\n  }\n};\n\nconst formatTasks = (tasks) => {\n  // Tranform the tasks objects into DOM elements\n  let taskList = [];\n  tasks.forEach((task) => {\n    taskList.push(new _data__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n  });\n  return taskList;\n};\n\nconst sortTasks = (a) => {\n  let nTasks = a.length;\n  let i;\n  let j;\n\n  // FIXME: Use JavaScript higer order functions to complete this task\n  for (i = 0; i < nTasks; i++) {\n    for (j = i + 1; j < nTasks; j++) {\n      if (new Date(a[i].dueDate) > new Date(a[j].dueDate)) swap(a[i], a[j]);\n    }\n  }\n  return a;\n};\n\nconst swap = (a, b) => {\n  let temp = "";\n\n  temp = a.title;\n  a.title = b.title;\n  b.title = temp;\n\n  temp = a.description;\n  a.description = b.description;\n  b.description = temp;\n\n  temp = a.dueDate;\n  a.dueDate = b.dueDate;\n  b.dueDate = temp;\n\n  temp = a.priority;\n  a.priority = b.priority;\n  b.priority = temp;\n\n  temp = a.notes;\n  a.notes = b.notes;\n  b.notes = temp;\n\n  temp = a.checklist;\n  a.checklist = b.checklist;\n  b.checklist = temp;\n};\n\nconst getDayStatus = () => {\n  const n = getMyDayTasks(new Date()).length;\n  switch (n) {\n    case 0:\n      return "You have no event scheduled for today";\n    case 1:\n      return "You have one event scheduled for today";\n    default:\n      return `You have ${n} events scheduled for today`;\n  }\n};\n\nconst getMyDayTasks = (date) => {\n  let myDayTasks = [];\n  let tasks = getData("tasks");\n\n  tasks.forEach((task) => {\n    if (\n      new Date(task.dueDate).toLocaleDateString() ==\n      new Date(date).toLocaleDateString()\n    )\n      myDayTasks.push(task);\n  });\n  return formatTasks(sortTasks(myDayTasks));\n};\n\nconst getDate = () => {\n  const d = new Date().toDateString().split(" ").splice(0, 3);\n\n  return {\n    day: d[0],\n    number: Number(d[2]),\n    month: d[1],\n  };\n};\n\nconst getDay = (d) => {\n  let day = new Date(d).toDateString().split(" ").splice(0, 3)[0];\n\n  switch (day) {\n    case "Tue":\n      return "Tuesday";\n    case "Wed":\n      return "Wednesday";\n    case "Thu":\n      return "Thursday";\n    case "Sat":\n      return "Saturday";\n    default:\n      return day + "day";\n  }\n};\n\nconst getDailyQuote = (quotes) =>\n  quotes[Math.floor(Math.random() * quotes.length)];\n\nconst getWelcomeMessage = () => `Good ${getPeriodOfTheDay()}`;\n\nconst getPeriodOfTheDay = () => {\n  const localeDate = new Date();\n  const localeTime = localeDate.toLocaleTimeString(undefined, {\n    hour: "2-digit",\n    minute: "2-digit",\n    second: "2-digit",\n  });\n  let period = localeTime.split(" ")[1];\n\n  if (period == "AM") return "morning";\n  else if (Number(localeTime.split(":")[0]) < 8) return "afternoon";\n  else return "night";\n};\n\nconst removeTask = (taskTitle) => {\n  let tasks = getData("tasks");\n\n  // FIXME: Use JavaScript higher function to complete this task\n  for (let i = 0; i < tasks.length; i++) {\n    if (tasks[i].title == taskTitle) {\n      tasks.splice(i, 1);\n      break;\n    }\n  }\n\n  setData("tasks", tasks);\n};\n\nconst setTaskComplete = (e) => {\n  const target = e.currentTarget.parentElement;\n  const targetTask = target.querySelector(".task-title").textContent;\n\n  target.classList.add("task-completed");\n  removeTask(targetTask);\n  target.remove();\n  refreshPage();\n};\n\nconst today = () => {\n  let d = new Date().toLocaleDateString().split("/");\n\n  return `${d[2]}-${d[0] < 10 ? `0${d[0]}` : d[0]}-${d[1] < 10 ? `0${d[1]}` : d[1]}`;\n};\n\nlet inputDay = "";\nconst setTheDay = (e) => {\n  let d = e.currentTarget.parentElement.querySelector(".day-title");\n\n  if (d != null) {\n    let currentDate = new Date();\n\n    d = Number(e.currentTarget.parentElement.id.split("-")[1]) - 1;\n    currentDate.setDate(currentDate.getDate() + d);\n    d = currentDate.toLocaleDateString().split("/");\n    inputDay = `${d[2]}-${d[0] < 10 ? `0${d[0]}` : d[0]}-${d[1] < 10 ? `0${d[1]}` : d[1]}`;\n  } else inputDay = today();\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?',
        );

        /***/
      },

    /***/ "./src/setting.png":
      /*!*************************!*\
  !*** ./src/setting.png ***!
  \*************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "d8c3bae9051e03eb1018.png";\n\n//# sourceURL=webpack://todo-list/./src/setting.png?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/functions.js");
  /******/
  /******/
})();
