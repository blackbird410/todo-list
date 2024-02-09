/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllTasks: () => (/* binding */ AllTasks),\n/* harmony export */   DailyTasks: () => (/* binding */ DailyTasks),\n/* harmony export */   ListForm: () => (/* binding */ ListForm),\n/* harmony export */   ListTasks: () => (/* binding */ ListTasks),\n/* harmony export */   MyDayHeader: () => (/* binding */ MyDayHeader),\n/* harmony export */   MyDayStatus: () => (/* binding */ MyDayStatus),\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar),\n/* harmony export */   SidebarFolder: () => (/* binding */ SidebarFolder),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskForm: () => (/* binding */ TaskForm),\n/* harmony export */   TaskInput: () => (/* binding */ TaskInput),\n/* harmony export */   defaultFolders: () => (/* binding */ defaultFolders),\n/* harmony export */   quotes: () => (/* binding */ quotes),\n/* harmony export */   settingIcon: () => (/* reexport default export from named module */ _setting_png__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _setting_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.png */ \"./src/setting.png\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\n\n\nconst MIN_PRIORITY = 1;\nconst MAX_PRIORITY = 3;\n\nclass SidebarFolder {\n\tconstructor(folder) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('folder-wrapper');\n\t\n\t\tthis.icon = document.createElement('i');\n\t\tif (folder.iconClass != '')\n\t\t\tthis.icon.classList.add(folder.iconClass);\n\t\telse\n\t\t\tthis.icon.classList.add('gg-user-list');\n\t\t\n\t\tthis.icon.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n\t\tthis.wrapper.appendChild(this.icon);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('folder-title');\n\t\tthis.title.textContent = folder.title;\n\t\tthis.title.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.count = document.createElement('div');\n\t\tthis.count.classList.add('file-count');\n\t\tthis.count.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayListTasks);\n\n\t\tswitch(folder.title)\n\t\t{\n\t\t\tcase \"My day\":\n\t\t\t\tthis.count.textContent = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.getMyDayTasks)(new Date()).length;\n\t\t\t\tbreak;\n\t\t\tcase \"Next 7 days\":\n\t\t\t\tthis.count.textContent = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.weekTasksCount)();\n\t\t\t\tbreak;\n\t\t\tcase \"All my tasks\":\n\t\t\t\tthis.count.textContent = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.countTasks)();\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tthis.count.textContent = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.getListTasks)(folder.title).length;\n\t\t\t\tbreak;\n\t\t}\n\t\tthis.wrapper.appendChild(this.count);\n\t\n\t}\n}\n\nclass Sidebar {\n\tconstructor(defaultFolders, userFolders) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('sidebar');\n\n\t\tthis.defaultWrapper = document.createElement('div');\n\t\tthis.defaultWrapper.classList.add('default-wrapper');\n\t\tdefaultFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\n\t\t\tswitch(folder.title)\n\t\t\t{\n\t\t\t\tcase \"My day\":\n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyDay);\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"Next 7 days\":\n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyWeek);\n\t\t\t\t\tbreak;\n\t\t\t\tdefault: \n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyTasks);\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tthis.defaultWrapper.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.defaultWrapper);\n\n\t\tthis.userList = document.createElement('div');\n\t\tthis.userList.classList.add('user-list');\n\n\t\tthis.titleWrapper =  document.createElement('div');\n\t\tthis.titleWrapper.classList.add('title-wrapper');\n\t\t\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.textContent =  'My lists';\n\t\tthis.titleWrapper.appendChild(this.title);\n\n\t\tthis.icon = document.createElement('i');\n\t\tthis.icon.classList.add('gg-add');\n\t\tthis.icon.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayListForm);\t\n\t\tthis.titleWrapper.appendChild(this.icon);\n\t\n\t\tthis.wrapper.appendChild(this.titleWrapper);\n\t\tuserFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\n\t\t\tconst removeIcon = document.createElement('i');\n\t\t\tremoveIcon.classList.add('gg-remove');\n\t\t\tremoveIcon.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.removeUserList);\n\t\t\tf.wrapper.appendChild(removeIcon);\n\t\t\tthis.userList.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.userList);\n\t}\n}\n\nclass MyDayHeader {\n\tconstructor(welcomeText, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-header');\n\n\t\tthis.welcomeText = document.createElement('div');\n\t\tthis.welcomeText.classList.add('welcome-msg');\n\t\tthis.welcomeText.textContent = welcomeText;\n\t\tthis.wrapper.appendChild(this.welcomeText);\n\n\t\tthis.message = document.createElement('div');\n\t\tthis.message.classList.add('header-quote');\n\t\tthis.message.textContent = message;\n\t\tthis.wrapper.appendChild(this.message);\n\t}\n}\n\nclass MyDayStatus {\n\tconstructor(date, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-status');\n\n\t\tthis.date = document.createElement('div');\n\t\tthis.date.classList.add('date-wrapper');\n\t\t\n\t\tthis.weekday = document.createElement('div');\n\t\tthis.weekday.classList.add('weekday');\n\t\tthis.weekday.textContent = date.day;\n\t\tthis.date.appendChild(this.weekday);\n\n\t\tthis.weekNumber = document.createElement('div');\n\t\tthis.weekNumber.classList.add('week-number');\n\t\tthis.weekNumber.textContent = date.number;\n\t\tthis.date.appendChild(this.weekNumber);\n\n\t\tthis.month = document.createElement('div');\n\t\tthis.month.classList.add('month');\n\t\tthis.month.textContent = date.month;\n\t\tthis.date.appendChild(this.month);\n\t\tthis.wrapper.appendChild(this.date);\n\n\t\tthis.msg = document.createElement('div');\n\t\tthis.msg.classList.add('my-day-status-msg');\n\t\tthis.msg.textContent = message;\n\t\tthis.wrapper.appendChild(this.msg);\n\t}\n}\n\nclass Task {\n\tconstructor(task) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('task-wrapper', `priority-${task.priority}`);\n\n\t\tlet taskId = task.title.toLowerCase().split(' ').join('-');\n\n\t\tthis.checkBtn = document.createElement('input');\n\t\tthis.checkBtn.classList.add('task-checkbox');\n\t\tthis.checkBtn.type = 'checkbox';\n\t\tthis.checkBtn.id = taskId;\n\t\tthis.checkBtn.name = taskId;\n\t\tthis.checkBtn.value = task.title;\n\t\tthis.checkBtn.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.setTaskComplete);\n\t\tthis.wrapper.appendChild(this.checkBtn);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('task-title');\n\t\tthis.title.textContent = task.title;\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.dueDate = document.createElement('div');\n\t\tthis.dueDate.classList.add('task-due-date');\n\t\tthis.dueDate.textContent = task.dueDate;\n\t\tthis.wrapper.appendChild(this.dueDate);\n\n\t\tthis.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskNote);\n\n\t\t// Should add an event when clicking on the element to display those information\n\n\t}\n}\n\nclass ListForm {\n\tconstructor() {\n\t\tthis.form = document.createElement('form');\n\t\tthis.form.id = 'list-form';\n\t\tthis.form.noValidate = true;\n\n\t\tthis.input = document.createElement('input');\n\t\tthis.input.id = 'list-name';\n\t\tthis.input.name = 'list-name';\n\t\tthis.input.placeholder = 'Add list name';\n\t\tthis.form.appendChild(this.input);\n\n\t\tthis.btnWrapper = document.createElement('div');\n\t\tthis.btnWrapper.classList.add('btn-wrapper');\n\t\tthis.btnSave = document.createElement('button');\n\t\tthis.btnSave.id = 'add-list-btn';\n\t\tthis.btnSave.textContent = 'Save'\n\t\tthis.btnSave.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.addFolder);\n\t\tthis.btnWrapper.appendChild(this.btnSave);\n\n\t\tthis.btnCancel = document.createElement('button');\n\t\tthis.btnCancel.id = 'cancel-btn';\n\t\tthis.btnCancel.name = 'cancel-btn';\n\t\tthis.btnCancel.textContent = 'Cancel';\n\t\tthis.btnCancel.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.removeForm);\n\t\tthis.btnWrapper.appendChild(this.btnCancel);\n\n\t\tthis.form.appendChild(this.btnWrapper);\n\t}\n}\n\nclass TaskForm {\n\tconstructor() {\n\t\tthis.form = document.createElement('form');\n\t\tthis.form.id = 'task-form';\n\t\tthis.form.noValidate = true;\n\n\t\tconst fields = ['Title', 'Description', 'DueDate', 'Priority', 'Notes', 'Checklist'];\n\n\t\tfields.forEach(field => {\n\t\t\tconst wrapper = document.createElement('div');\n\t\t\twrapper.classList.add('field-wrapper');\n\n\t\t\tconst id = field.toLowerCase();\n\n\t\t\tconst label = document.createElement('label');\n\t\t\tlabel.setAttribute('for', id);\n\t\t\tlabel.textContent = field;\n\t\t\twrapper.appendChild(label);\n\n\t\t\tconst input = document.createElement('input');\n\t\t\tinput.id = id;\n\t\t\tinput.name = id;\n\t\t\tswitch(field)\n\t\t\t{\n\t\t\t\tcase \"DueDate\":\n\t\t\t\t\tinput.type = 'date';\n\t\t\t\t\tinput.min = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.today)();\n\t\t\t\t\tinput.value = _functions_js__WEBPACK_IMPORTED_MODULE_1__.inputDay;\n\t\t\t\t\twrapper.appendChild(input);\n\n\t\t\t\t\tconst time = document.createElement('input');\n\t\t\t\t\ttime.type = 'time';\n\t\t\t\t\ttime.id = 'duetime';\n\t\t\t\t\ttime.name = 'duetime';\n\t\t\t\t\ttime.value= '08:00:00';\n\t\t\t\t\twrapper.appendChild(time);\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"Priority\":\n\t\t\t\t\tinput.type = 'number';\n\t\t\t\t\tinput.min = MIN_PRIORITY;\n\t\t\t\t\tinput.max = MAX_PRIORITY;\n\t\t\t\t\tinput.value = MIN_PRIORITY;\n\t\t\t\t\twrapper.appendChild(input);\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"Checklist\":\n\t\t\t\t\tinput.value = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.getChecklistTitle)();\n\t\t\t\tdefault:\n\t\t\t\t\twrapper.appendChild(input);\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t\tthis.form.appendChild(wrapper);\t\n\t\t});\n\n\t\t\n\t\tthis.btnWrapper = document.createElement('div');\n\t\tthis.btnWrapper.classList.add('btn-wrapper');\n\t\tthis.btnSave = document.createElement('button');\n\t\tthis.btnSave.id = 'add-task-btn';\n\t\tthis.btnSave.textContent = 'Save'\n\t\tthis.btnSave.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.addTask);\n\t\tthis.btnWrapper.appendChild(this.btnSave);\n\n\t\tthis.btnCancel = document.createElement('button');\n\t\tthis.btnCancel.id = 'cancel-btn';\n\t\tthis.btnCancel.name = 'cancel-btn';\n\t\tthis.btnCancel.textContent = 'Cancel';\n\t\tthis.btnCancel.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.removeForm);\n\t\tthis.btnWrapper.appendChild(this.btnCancel);\n\n\t\tthis.form.appendChild(this.btnWrapper);\n\t}\n}\n\nclass DailyTasks {\n\tconstructor(myTasks) {\n\t\tthis.allTasks = myTasks;\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('daily-task-wrapper', 'tasks-wrapper');\n\t\t\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('day-title');\n\t\tthis.title.textContent = myTasks.title;\n\t\tthis.wrapper.appendChild(this.title);\n\t\tthis.wrapper.appendChild(new TaskInput().wrapper);\n\n\t\tthis.allTasks.tasks.forEach(task => {\n\t\t\tthis.wrapper.appendChild(task.wrapper);\n\t\t});\n\n\t}\n}\n\nclass ListTasks extends DailyTasks {\n\tconstructor(myTasks) {\n\t\tsuper(myTasks);\n\t\t\tthis.wrapper.classList.add('list-task-wrapper');\n\t\t\tthis.title.classList.add('list-title');\n\t}\n}\n\nclass AllTasks extends DailyTasks {\n\tconstructor(myTasks) {\n\t\tsuper(myTasks);\n\t\tthis.wrapper.classList.add('all-tasks-wrapper');\n\t\tthis.title.textContent = \"My Tasks\";\n\t}\n}\n\nclass TaskInput {\n\tconstructor() {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('input-wrapper');\n\t\tthis.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskForm);\n\n\t\tconst icon = document.createElement('i');\n\t\ticon.classList.add('gg-add');\n\t\tthis.wrapper.appendChild(icon);\n\n\t\tconst input = document.createElement('input');\n\t\tinput.classList.add('task-input');\n\t\tinput.name = 'task-input';\n\t\tinput.placeholder = \"Add task\";\n\t\tthis.wrapper.appendChild(input);\n\t}\n}\n\n\nconst quotes = [\n\t\"Be so good no one can ignore you\",\n\t\"Remove doubts with actions\",\n\t\"Run your day or your day will run you\",\n\t\"What’s your plan for today?\",\n\t\"This is your private space\",\n\t\"What will you accomplish today?\",\n\t\"Let's make an impact\",\n\t\"You can make magic happen\",\n];\n\n\nlet defaultFolders = [\n\t{\n\t\t\"title\": \"My day\",\n\t\t\"iconClass\": \"gg-media-live\",\n\t},\n\t{\n\t\t\"title\": \"Next 7 days\",\n\t\t\"iconClass\": \"gg-calendar-due\",\n\t},\n\t{\n\t\t\"title\": \"All my tasks\",\n\t\t\"iconClass\": \"gg-list\",\n\t},\n];\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFolder: () => (/* binding */ addFolder),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   countTasks: () => (/* binding */ countTasks),\n/* harmony export */   displayListForm: () => (/* binding */ displayListForm),\n/* harmony export */   displayListTasks: () => (/* binding */ displayListTasks),\n/* harmony export */   displayMain: () => (/* binding */ displayMain),\n/* harmony export */   displayMyDay: () => (/* binding */ displayMyDay),\n/* harmony export */   displayMyTasks: () => (/* binding */ displayMyTasks),\n/* harmony export */   displayMyWeek: () => (/* binding */ displayMyWeek),\n/* harmony export */   displaySidebar: () => (/* binding */ displaySidebar),\n/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),\n/* harmony export */   displayTaskNote: () => (/* binding */ displayTaskNote),\n/* harmony export */   getChecklistTitle: () => (/* binding */ getChecklistTitle),\n/* harmony export */   getListTasks: () => (/* binding */ getListTasks),\n/* harmony export */   getMyDayTasks: () => (/* binding */ getMyDayTasks),\n/* harmony export */   inputDay: () => (/* binding */ inputDay),\n/* harmony export */   removeForm: () => (/* binding */ removeForm),\n/* harmony export */   removeUserList: () => (/* binding */ removeUserList),\n/* harmony export */   setTaskComplete: () => (/* binding */ setTaskComplete),\n/* harmony export */   today: () => (/* binding */ today),\n/* harmony export */   weekTasksCount: () => (/* binding */ weekTasksCount)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nconst DATE_STRING_BOUND = 24;\n\nif (!localStorage.getItem(\"tasks\"))\n\tpopulateStorage();\n\nfunction countTasks() {\n\treturn getData(\"tasks\").length;\n}\n\nfunction populateStorage() {\n\t\n\tconst myTasks = JSON.stringify([]);\n\tlocalStorage.setItem(\"tasks\", myTasks);\n\n\tconst userFolders = JSON.stringify([]);\n\tlocalStorage.setItem(\"userFolders\", userFolders);\n}\n\nfunction getData(name) {\n\tconst stringifyArray = localStorage.getItem(name);\n\tconst backToArray = JSON.parse(stringifyArray);\n\t\n\treturn backToArray;\n}\n\nfunction setData(name, data) {\n\tconst data_serialized = JSON.stringify(data);\n\tlocalStorage.setItem(name, data_serialized);\n}\n\n\nfunction displayTaskNote(e) {\n\tlet tasks = getData(\"tasks\");\n\tif (e.currentTarget.querySelector('.task-note') == null)\n\t{\n\t\tlet i;\n\t\tlet targetTitle = e.currentTarget.querySelector('.task-title').textContent;\n\t\tfor (i = 0; i < tasks.length; i++)\n\t\t{\n\t\t\tif (tasks[i].title == targetTitle)\n\t\t\t{\n\t\t\t\tconst desc = document.createElement('div');\n\t\t\t\tdesc.classList.add('task-description');\n\t\t\t\tdesc.textContent = tasks[i].description;\n\n\t\t\t\tconst note = document.createElement('div');\n\t\t\t\tnote.classList.add('task-note');\n\t\t\t\tnote.textContent = tasks[i].notes;\n\n\t\t\t\te.currentTarget.appendChild(desc);\n\t\t\t\te.currentTarget.appendChild(note);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t}\n\telse {\n\t\te.currentTarget.querySelector('.task-description').remove();\n\t\te.currentTarget.querySelector('.task-note').remove();\n\t}\n}\n\n\nfunction getChecklistTitle() {\n\tlet element = document.querySelector('.list-title');\n\treturn (element != null) ? element.textContent : \"\";\n}\n\nfunction displayMain()\n{\n\tpopulateUserList();\n\tconst mainIcon = document.createElement('img');\n\tmainIcon.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.settingIcon;\n\tmainIcon.id = 'setting-icon';\n\tmainIcon.addEventListener('mouseover', displaySidebar);\n\tdocument.body.appendChild(mainIcon);\n    displayMyDay();\n}\n\nfunction displayMyDay()\n{\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\n\tconst welcomeMsg = getWelcomeMessage();\n\tconst quote = getDailyQuote(_data_js__WEBPACK_IMPORTED_MODULE_0__.quotes);\n\n\tconst header = new _data_js__WEBPACK_IMPORTED_MODULE_0__.MyDayHeader(welcomeMsg, quote);\n\tcontent.appendChild(header.wrapper);\n\t\n\tconst date = getDate();\n\tconst myDayStatus = new _data_js__WEBPACK_IMPORTED_MODULE_0__.MyDayStatus(date, getDayStatus());\n\tcontent.appendChild(myDayStatus.wrapper);\n\n\tconst tasksWrapper = document.createElement('div');\n\ttasksWrapper.classList.add('tasks-wrapper');\n\t\n\tconst myDay = new Date().toString().slice(0, 24);\n\tconst myDayTasks = getMyDayTasks(myDay);\n\tmyDayTasks.forEach(task => {\n\t\ttask.dueDate.textContent = new Date(task.dueDate.textContent).toLocaleTimeString();\n\t\ttasksWrapper.appendChild(task.wrapper);\n\t});\n\tcontent.appendChild(tasksWrapper);\n\n\tconst inputWrapper = new _data_js__WEBPACK_IMPORTED_MODULE_0__.TaskInput().wrapper;\n\tcontent.appendChild(inputWrapper);\n\tdocument.body.appendChild(content);\n\taddTaskbarListener();\n}\n\nfunction addTaskbarListener() {\n\tconst content = document.querySelector(\"#content\");\n\tcontent.addEventListener('mouseover', () => {\n\t\tlet sidebar = document.querySelector('.sidebar');\n\t\tif (sidebar != null)\n\t\t\tsidebar.remove();\n\t});\n}\n\nfunction displayMyWeek()\n{\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\n\tconst weekTasks = getWeekTasks();\n\tlet i = 1;\n\tweekTasks.forEach(day => {\n\t\tconst dailyTasks = new _data_js__WEBPACK_IMPORTED_MODULE_0__.DailyTasks(day);\n\t\tdailyTasks.wrapper.id = `day-${i}`;\n\t\ti++;\n\t\tcontent.appendChild(dailyTasks.wrapper);\n\t});\n\n\tcontent.classList.add('grid-row', 'my-week');\n\t\n\tdocument.body.appendChild(content);\n\taddTaskbarListener();\n}\n\nfunction getWeekTasks() {\n\tlet currentDate;\n\tlet weekTasks = [];\n\n\tfor (let d = 0; d < 7; d++)\n\t{\n\t\tcurrentDate = new Date();\n\t\tcurrentDate.setDate(currentDate.getDate() + d);\n\t\tcurrentDate = currentDate.toString().slice(0, DATE_STRING_BOUND);\n\t\tweekTasks.push(\n\t\t{\n\t\t\t\"title\": getDay(currentDate),\n\t\t\t\"tasks\": getMyDayTasks(currentDate),\n\t\t});\n\t}\n\n\treturn weekTasks;\n}\n\nfunction weekTasksCount() {\n\tlet endDate = new Date();\n\tlet tasks = getData(\"tasks\");\n\tendDate.setDate(endDate.getDate() + 6);\n\n\tlet count = 0;\n\ttasks.forEach(task => {\n\t\tif (new Date(task.dueDate) <  endDate)\n\t\t\tcount++;\n\t});\n\n\treturn count;\n}\n\nfunction displayMyTasks() {\t\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\n\tlet allTasks = [];\n\tlet tasks = getData(\"tasks\");\n\ttasks.forEach(task => {\n\t\tallTasks.push(new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n\t});\n\tallTasks = new _data_js__WEBPACK_IMPORTED_MODULE_0__.AllTasks(\n\t\t{\n\t\t\t\"title\" : \"My tasks\",\n\t\t\t\"tasks\": allTasks,\n\t\t});\n\tcontent.appendChild(allTasks.wrapper);\n\tdocument.body.appendChild(content);\n\taddTaskbarListener();\n}\n\nfunction displayListTasks(e) {\n\tlet target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;\n\n\tif (target != \"My day\" && target != \"Next 7 days\" && target != \"All my tasks\")\n\t{\n\t\tconst previousContent = document.querySelector(\"#content\");\n\t\tif (previousContent != null)\n\t\t\tpreviousContent.remove();\n\n\t\tconst content = document.createElement('div');\n\t\tcontent.id = \"content\";\n\t\t\n\t\tlet listTasks = getListTasks(target);\n\t\tlistTasks = {\n\t\t\t\"title\": target,\n\t\t\t\"tasks\": listTasks,\n\t\t};\n\t\tconst checkList = new _data_js__WEBPACK_IMPORTED_MODULE_0__.ListTasks(listTasks);\n\t\tcontent.appendChild(checkList.wrapper);\n\n\t\tdocument.body.appendChild(content);\n\t\taddTaskbarListener();\n\t}\n}\n\nfunction getListTasks(list) {\n\tlet listTasks = [];\n\tlet tasks = getData(\"tasks\");\n\n\ttasks.forEach(task => {\n\t\tif (task.checklist == list)\n\t\t\tlistTasks.push(new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n\t});\n\n\treturn listTasks;\n}\n\n\nfunction removeUserList(e) {\n\tconst target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;\n\t\n\tlet userFolders = getData(\"userFolders\");\n\tlet i;\n\tfor(i = 0; i < userFolders.length; i++)\n\t{\n\t\tif (userFolders[i].title == target)\n\t\t{\n\t\t\tuserFolders.splice(i, 1);\n\t\t\te.currentTarget.parentElement.remove();\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tlet tasks = getData(\"tasks\");\n\t// Removes all the tasks associated with the list\n\tfor (i = 0; i < tasks.length; i++)\n\t{\n\t\tif (tasks[i].checklist == target)\n\t\t{\n\t\t\ttasks.splice(i, 1);\n\t\t\ti--;\n\t\t}\n\t}\n\t\n\tsetData(\"userFolders\", userFolders);\n\tsetData(\"tasks\", \"tasks\");\n\trefreshPage();\n\tdocument.querySelector('.sidebar').remove();\n\tdisplaySidebar();\n}\n\nfunction populateUserList() {\n\tlet list = [];\n\tlet found;\n\tlet tasks = getData(\"tasks\");\n\tlet userFolders = getData(\"userFolders\");\n\n\ttasks.forEach(task => {\n\t\tfound = false;\n\t\tfor (let e in list) \n\t\t{\n\t\t\tif (list[e] == task.checklist) \n\t\t\t{\n\t\t\t\tfound = true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tif (!found && task.checklist != \"\") {\n\t\t\tlist.push(task.checklist);\n\t\t\tuserFolders.push(\n\t\t\t{\n\t\t\t\t\"title\": task.checklist,\n\t\t\t\t\"iconClass\": \"\",\n\t\t\t});\n\t\t}\n\t});\n\n\tsetData(\"userFolders\", userFolders);\n\n}\n\nfunction addTask(e) {\n\te.preventDefault();\n\tconst title = document.querySelector('form #title').value;\n\tlet date = document.querySelector(\"form #duedate\").value; \n\tlet time = document.querySelector(\"form #duetime\").value;\n\tdate = new Date(date + ' ' + time).toString().slice(0, 24);\n\n\tlet tasks = getData(\"tasks\");\n\n\tif (title != '')\n\t{\n\t\ttasks.push(\n\t\t\t{\n\t\t\t\t\"title\": title,\n\t\t\t\t\"description\": document.querySelector(\"form #description\").value,\n\t\t\t\t\"dueDate\": date,\n\t\t\t\t\"priority\": document.querySelector(\"form #priority\").value,\n\t\t\t\t\"notes\": document.querySelector(\"form #notes\").value,\n\t\t\t\t\"checklist\": document.querySelector(\"form #checklist\").value,\n\t\t\t}\n\t\t);\n\t\tsetData(\"tasks\", tasks);\n\t\trefreshPage();\n\t\tremoveForm();\n\t}\n}\n\nfunction refreshPage() {\n\tif (document.querySelector('.my-week'))\n\t\tdisplayMyWeek();\n\telse if (document.querySelector('.all-tasks-wrapper'))\n\t\tdisplayMyTasks();\n\telse \n\t\tdisplayMyDay();\n}\n\nfunction addFolder() {\n\tconst folderName = document.querySelector('#list-name').value;\n\t// Check if not already added \n\tlet userFolders = getData(\"userFolders\");\n\tlet found = false;\n\tfor (let i = 0; i < userFolders.length; i++) {\n\t\tif (userFolders[i].title == folderName)\n\t\t{\n\t\t\tfound = true;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tif (folderName != '' && !found)\n\t{\n\t\tuserFolders.push(\n\t\t\t{\n\t\t\t\t\"title\": folderName,\n\t\t\t\t\"iconClass\": \"\",\n\t\t\t}\n\t\t);\n\t\tsetData(\"userFolders\", userFolders);\n\n\t\tdocument.querySelector('.sidebar').remove();\n\t\tdisplaySidebar();\n\t\tremoveForm();\n\t}\n}\n\nfunction removeForm() {\n\tconst form = document.querySelector('form');\n\tif(form != null)\n\t\tform.remove();\n}\n\nfunction displayListForm() {\n\tif (document.querySelector('#list-form') == null)\n\t{\n\t\tconst listForm = new _data_js__WEBPACK_IMPORTED_MODULE_0__.ListForm();\n\t\tdocument.body.appendChild(listForm.form);\n\t}\n}\n\nfunction displaySidebar() {\n\tif (document.querySelector('.sidebar') == null)\n\t{\n\t\tconsole.log(getData(\"userFolders\"))\n\t\tconst sidebar = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Sidebar(_data_js__WEBPACK_IMPORTED_MODULE_0__.defaultFolders, getData(\"userFolders\"));\n\t\tdocument.body.appendChild(sidebar.wrapper);\n\t}\n}\n\nfunction displayTaskForm(e) {\n\tif (document.querySelector('#task-form') == null)\n\t{\n\t\tsetTheDay(e);\n\t\tconst taskForm = new _data_js__WEBPACK_IMPORTED_MODULE_0__.TaskForm();\n\t\tdocument.body.appendChild(taskForm.form);\n\t}\n}\n\nfunction formatTasks(tasks) {\n\t// Tranform the tasks objects into DOM elements\n\n\tlet taskList = [];\n\ttasks.forEach(task => {\n\t\ttaskList.push(new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n\t});\n\treturn taskList;\n};\n\nfunction sortTasks(a) {\n\tlet nTasks = a.length;\n\tlet i, j;\n\n\tfor (i = 0; i < nTasks; i++)\n\t{\n\t\tfor(j = i+1; j < nTasks; j++)\n\t\t{\n\t\t\tif (new Date(a[i].dueDate) > new Date(a[j].dueDate))\n\t\t\t\tswap(a[i], a[j]);\n\t\t}\n\t}\n\treturn a;\n};\n\nfunction swap(a, b)\n{\n\tlet temp = '';\n\n\ttemp = a.title;\n\ta.title = b.title;\n\tb.title = temp;\n\n\ttemp = a.description;\n\ta.description = b.description;\n\tb.description = temp;\n\n\ttemp = a.dueDate;\n\ta.dueDate = b.dueDate;\n\tb.dueDate = temp;\n\n\ttemp = a.priority;\n\ta.priority = b.priority;\n\tb.priority = temp;\n\n\ttemp = a.notes;\n\ta.notes = b.notes;\n\tb.notes = temp;\n\n\ttemp = a.checklist;\n\ta.checklist = b.checklist;\n\tb.checklist = temp;\n}\n\nfunction getDayStatus() {\n\tconst n = getMyDayTasks(new Date()).length;\n\tswitch(n)\n\t{\n\t\tcase 0:\n\t\t\treturn \"You have no event scheduled for today\";\n\t\tcase 1:\n\t\t\treturn \"You have one event scheduled for today\";\n\t\tdefault:\n\t\t\treturn `You have ${n} events scheduled for today`;\n\t}\n}\n\nfunction getMyDayTasks(date) {\n\tlet myDayTasks = [];\n\tlet tasks = getData(\"tasks\");\n\n\ttasks.forEach(task => {\n\t\tif (new Date(task.dueDate).toLocaleDateString() == new Date(date).toLocaleDateString())\n\t\t\tmyDayTasks.push(task);\n\t});\n\n\treturn formatTasks(sortTasks(myDayTasks));\n}\n\nfunction getDate() {\t\n\tconst d = new Date().toDateString().split(' ').splice(0,3);\n\treturn {\n\t\t\"day\": d[0],\n\t\t\"number\": Number(d[2]),\n\t\t\"month\": d[1],\n\t};\n}\n\nfunction getDay(d) {\n\tlet day = new Date(d).toDateString().split(' ').splice(0,3)[0];\n\n\tswitch(day) {\n\t\tcase \"Tue\":\n\t\t\treturn \"Tuesday\";\n\t\tcase \"Wed\":\n\t\t\treturn \"Wednesday\";\n\t\tcase \"Thu\":\n\t\t\treturn \"Thursday\";\n\t\tcase \"Sat\":\n\t\t\treturn \"Saturday\";\n\t\tdefault:\n\t\t\treturn day + \"day\";\n\t}\n}\n\nfunction getDailyQuote(quotes) {\n    const quoteIndex = Math.floor(Math.random() * quotes.length);\n\treturn quotes[quoteIndex];\n}\n\nfunction getWelcomeMessage() {\n\treturn `Good ${getPeriodOfTheDay()}`;\n};\n\n\nfunction getPeriodOfTheDay() {\n\tconst localeDate = new Date();\n\tconst localeTime = localeDate.toLocaleTimeString(undefined, {\n\t\thour: '2-digit',\n\t\tminute: '2-digit',\n\t\tsecond: '2-digit',\n\t});\n\n\tlet period = localeTime.split(' ')[1] \n\n\tif (period ==  \"AM\")\n\t\treturn \"morning\";\n\telse if (Number(localeTime.split(':')[0]) < 8)\n\t\treturn \"afternoon\";\n\telse\n\t\treturn \"night\";\n}\n\nfunction removeTask(taskTitle) {\n\tlet tasks = getData(\"tasks\");\n\tfor (let i = 0; i < tasks.length; i++)\n\t{\n\t\tif (tasks[i].title == taskTitle)\n\t\t{\n\t\t\ttasks.splice(i, 1);\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tsetData(\"tasks\", tasks);\n}\n\nfunction setTaskComplete(e) {\n\tconst target = e.currentTarget.parentElement;\n\ttarget.classList.add('task-completed');\n\n\tconst targetTask = target.querySelector('.task-title').textContent;\n\tremoveTask(targetTask);\n\ttarget.remove();\n\trefreshPage();\n}\n\nfunction today() {\n\tlet d = new Date().toLocaleDateString().split('/');\n\treturn `${d[2]}-${(d[0] < 10) ? `0${d[0]}` : d[0]}-${(d[1] < 10) ? `0${d[1]}` : d[1]}`;\n\n}\n\nlet inputDay = \"\";\nfunction setTheDay(e) {\n\tlet d = e.currentTarget.parentElement.querySelector('.day-title');\n\tif (d != null)\n\t{\n\t\td = Number(e.currentTarget.parentElement.id.split('-')[1]) - 1;\n\t\tlet currentDate = new Date();\n\t\tcurrentDate.setDate(currentDate.getDate() + d);\n\t\td = currentDate.toLocaleDateString().split('/');\n\t\tinputDay = `${d[2]}-${(d[0] < 10) ? `0${d[0]}` : d[0]}-${(d[1] < 10) ? `0${d[1]}` : d[1]}`;\n\t}\n\telse\n\t\tinputDay = today();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

/***/ }),

/***/ "./src/setting.png":
/*!*************************!*\
  !*** ./src/setting.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8c3bae9051e03eb1018.png\";\n\n//# sourceURL=webpack://todo-list/./src/setting.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/data.js");
/******/ 	
/******/ })()
;