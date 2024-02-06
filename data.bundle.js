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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListForm: () => (/* binding */ ListForm),\n/* harmony export */   MyDayHeader: () => (/* binding */ MyDayHeader),\n/* harmony export */   MyDayStatus: () => (/* binding */ MyDayStatus),\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   defaultFolders: () => (/* binding */ defaultFolders),\n/* harmony export */   quotes: () => (/* binding */ quotes),\n/* harmony export */   settingIcon: () => (/* reexport default export from named module */ _setting_png__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   tasks: () => (/* binding */ tasks),\n/* harmony export */   userFolders: () => (/* binding */ userFolders)\n/* harmony export */ });\n/* harmony import */ var _setting_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.png */ \"./src/setting.png\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\n\nclass SidebarFolder {\n\tconstructor(folder) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('folder-wrapper');\n\t\n\t\tthis.icon = document.createElement('i');\n\t\tif (folder.iconClass != '')\n\t\t\tthis.icon.classList.add(folder.iconClass);\n\t\telse\n\t\t\tthis.icon.classList.add('gg-user-list');\n\n\t\tthis.wrapper.appendChild(this.icon);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('folder-title');\n\t\tthis.title.textContent = folder.title;\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.count = document.createElement('div');\n\t\tthis.count.classList.add('file-count');\n\t\tthis.count.textContent = folder.files;\n\t\tthis.wrapper.appendChild(this.count);\n\t\n\t}\n}\n\nclass Sidebar {\n\tconstructor(defaultFolders, userFolders) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('sidebar');\n\n\t\tthis.defaultWrapper = document.createElement('div');\n\t\tthis.defaultWrapper.classList.add('default-wrapper');\n\t\tdefaultFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\n\t\t\tswitch(folder.title)\n\t\t\t{\n\t\t\t\tcase \"My day\":\n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyDay);\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"Next 7 days\":\n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyWeek);\n\t\t\t\t\tbreak;\n\t\t\t\tdefault: \n\t\t\t\t\tf.wrapper.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayMyTasks);\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tthis.defaultWrapper.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.defaultWrapper);\n\n\t\tthis.userList = document.createElement('div');\n\t\tthis.userList.classList.add('user-list');\n\n\t\tthis.titleWrapper =  document.createElement('div');\n\t\tthis.titleWrapper.classList.add('title-wrapper');\n\t\t\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.textContent =  'My lists';\n\t\tthis.titleWrapper.appendChild(this.title);\n\n\t\tthis.icon = document.createElement('i');\n\t\tthis.icon.classList.add('gg-add');\n\t\tthis.icon.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.displayListForm);\t\n\t\tthis.titleWrapper.appendChild(this.icon);\n\t\n\t\tthis.wrapper.appendChild(this.titleWrapper);\n\t\tuserFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\n\t\t\tconst removeIcon = document.createElement('i');\n\t\t\tremoveIcon.classList.add('gg-remove');\n\t\t\tremoveIcon.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.removeUserList);\n\t\t\tf.wrapper.appendChild(removeIcon);\n\t\t\tthis.userList.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.userList);\n\t}\n}\n\nclass MyDayHeader {\n\tconstructor(welcomeText, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-header');\n\n\t\tthis.welcomeText = document.createElement('div');\n\t\tthis.welcomeText.classList.add('welcome-msg');\n\t\tthis.welcomeText.textContent = welcomeText;\n\t\tthis.wrapper.appendChild(this.welcomeText);\n\n\t\tthis.message = document.createElement('div');\n\t\tthis.message.classList.add('header-quote');\n\t\tthis.message.textContent = message;\n\t\tthis.wrapper.appendChild(this.message);\n\t}\n}\n\nclass MyDayStatus {\n\tconstructor(date, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-status');\n\n\t\tthis.date = document.createElement('div');\n\t\tthis.date.classList.add('date-wrapper');\n\t\t\n\t\tthis.weekday = document.createElement('div');\n\t\tthis.weekday.classList.add('weekday');\n\t\tthis.weekday.textContent = date.day;\n\t\tthis.date.appendChild(this.weekday);\n\n\t\tthis.weekNumber = document.createElement('div');\n\t\tthis.weekNumber.classList.add('week-number');\n\t\tthis.weekNumber.textContent = date.number;\n\t\tthis.date.appendChild(this.weekNumber);\n\n\t\tthis.month = document.createElement('div');\n\t\tthis.month.classList.add('month');\n\t\tthis.month.textContent = date.month;\n\t\tthis.date.appendChild(this.month);\n\t\tthis.wrapper.appendChild(this.date);\n\n\t\tthis.msg = document.createElement('div');\n\t\tthis.msg.classList.add('my-day-status-msg');\n\t\tthis.msg.textContent = message;\n\t\tthis.wrapper.appendChild(this.msg);\n\t}\n}\n\nclass Task {\n\tconstructor(task) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('task-wrapper', `priority-${task.priority}`);\n\n\t\tlet taskId = task.title.toLowerCase().split(' ').join('-');\n\n\t\tthis.checkBtn = document.createElement('input');\n\t\tthis.checkBtn.classList.add('task-checkbox');\n\t\tthis.checkBtn.type = 'checkbox';\n\t\tthis.checkBtn.id = taskId;\n\t\tthis.checkBtn.name = taskId;\n\t\tthis.checkBtn.value = task.title;\n\t\tthis.wrapper.appendChild(this.checkBtn);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('task-title');\n\t\tthis.title.textContent = task.title;\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.description = document.createElement('div');\n\t\tthis.description.classList.add('task-description');\n\t\tthis.description.textContent = task.description;\n\t\tthis.wrapper.appendChild(this.description);\n\n\t\tthis.dueDate = document.createElement('div');\n\t\tthis.dueDate.classList.add('task-due-date');\n\t\tthis.dueDate.textContent = task.dueDate;\n\t\tthis.wrapper.appendChild(this.dueDate);\n\n\t\tthis.notes = document.createElement('div');\n\t\tthis.notes.classList.add('task-note');\n\t\tthis.notes.textContent = task.notes;\n\t\tthis.wrapper.appendChild(this.notes);\t\n\t}\n}\n\nclass ListForm {\n\tconstructor() {\n\t\tthis.form = document.createElement('form');\n\t\tthis.form.id = 'list-form';\n\t\tthis.form.noValidate = true;\n\n\t\tthis.input = document.createElement('input');\n\t\tthis.input.id = 'list-name';\n\t\tthis.input.name = 'list-name';\n\t\tthis.input.placeholder = 'Add list name';\n\t\tthis.form.appendChild(this.input);\n\n\t\tthis.btnWrapper = document.createElement('div');\n\t\tthis.btnWrapper.classList.add('btn-wrapper');\n\t\tthis.btnSave = document.createElement('button');\n\t\tthis.btnSave.id = 'add-list-btn';\n\t\tthis.btnSave.textContent = 'Save'\n\t\tthis.btnSave.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.addFolder);\n\t\tthis.btnWrapper.appendChild(this.btnSave);\n\n\t\tthis.btnCancel = document.createElement('button');\n\t\tthis.btnCancel.id = 'cancel-btn';\n\t\tthis.btnCancel.name = 'cancel-btn';\n\t\tthis.btnCancel.textContent = 'Cancel';\n\t\tthis.btnCancel.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_1__.removeForm);\n\t\tthis.btnWrapper.appendChild(this.btnCancel);\n\n\t\tthis.form.appendChild(this.btnWrapper);\n\t}\n}\n\nconst quotes = [\n\t\"Be so good no one can ignore you\",\n\t\"Remove doubts with actions\",\n];\n\nconst tasks = [\n\t{\n\t\t\"title\": \"Practice Chinese\",\n\t\t\"description\": \"Practice writing Chinese characters for 30 minutes.\",\n\t\t\"dueDate\": \"9:00 PM\",\n\t\t\"priority\": \"1\",\n\t\t\"notes\": \"Chapter 5\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Cook dinner\",\n\t\t\"description\": \"Today we have noodles on the menu.\",\n\t\t\"dueDate\": \"3:00 PM\",\n\t\t\"priority\": \"2\",\n\t\t\"notes\": \"Use mushrooms, green pepper and onions\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Exercise\",\n\t\t\"description\": \"Five sets of 20 push-ups, five-sets of 20 squats\",\n\t\t\"dueDate\": \"5:00 PM\",\n\t\t\"priority\": \"3\",\n\t\t\"notes\": \"Go hard, go fast and be strong.\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Buy fruits\",\n\t\t\"description\": \"Buy 7 apples and some bananas for around 150 NTD.\",\n\t\t\"dueDate\": \"7:00 PM\",\n\t\t\"priority\": \"2\",\n\t\t\"notes\": \"Eat at least one fruit per day and you won't have to visit the med before a long time.\",\n\t\t\"checklist\": \"\",\n\t},\n];\n\nlet defaultFolders = [\n\t{\n\t\t\"title\": \"My day\",\n\t\t\"iconClass\": \"gg-media-live\",\n\t\t\"files\": \"5\",\n\t},\n\t{\n\t\t\"title\": \"Next 7 days\",\n\t\t\"iconClass\": \"gg-calendar-due\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"All my tasks\",\n\t\t\"iconClass\": \"gg-list\",\n\t\t\"files\": \"4\",\n\t},\n]\n\nlet userFolders = [\t\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n]\n\n\n\n//# sourceURL=webpack://todo-list/./src/data.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFolder: () => (/* binding */ addFolder),\n/* harmony export */   displayListForm: () => (/* binding */ displayListForm),\n/* harmony export */   displayMain: () => (/* binding */ displayMain),\n/* harmony export */   displayMyDay: () => (/* binding */ displayMyDay),\n/* harmony export */   displayMyTasks: () => (/* binding */ displayMyTasks),\n/* harmony export */   displayMyWeek: () => (/* binding */ displayMyWeek),\n/* harmony export */   displaySidebar: () => (/* binding */ displaySidebar),\n/* harmony export */   removeForm: () => (/* binding */ removeForm),\n/* harmony export */   removeUserList: () => (/* binding */ removeUserList)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nfunction displayMain()\n{\n\tconst mainIcon = document.createElement('img');\n\tmainIcon.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.settingIcon;\n\tmainIcon.id = 'setting-icon';\n\tmainIcon.addEventListener('mouseover', displaySidebar);\n\tdocument.body.appendChild(mainIcon);\n    displayMyDay();\n\n}\n\nfunction displayMyDay()\n{\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\n\tconst welcomeMsg = getWelcomeMessage();\n\tconst quote = getDailyQuote(_data_js__WEBPACK_IMPORTED_MODULE_0__.quotes);\n\n\tconst header = new _data_js__WEBPACK_IMPORTED_MODULE_0__.MyDayHeader(welcomeMsg, quote);\n\tcontent.appendChild(header.wrapper);\n\t\n\tconst date = getDate();\n\tconst myDayStatus = new _data_js__WEBPACK_IMPORTED_MODULE_0__.MyDayStatus(date, getDayStatus());\n\tcontent.appendChild(myDayStatus.wrapper);\n\n\tconst tasksWrapper = document.createElement('div');\n\ttasksWrapper.classList.add('tasks-wrapper');\n\tconst tasks = getTasks();\n\ttasks.forEach(task => {\n\t\ttasksWrapper.appendChild(task.wrapper);\n\t});\n\tcontent.appendChild(tasksWrapper);\n\n\tconst inputWrapper = document.createElement('div');\n\tinputWrapper.classList.add('input-wrapper');\n\n\tconst icon = document.createElement('i');\n\ticon.classList.add('gg-add');\n\tinputWrapper.appendChild(icon);\n\n\tconst input = document.createElement('input');\n\tinput.id = 'task-input';\n\tinput.name = 'task-input';\n\tinput.placeholder = \"Add task\";\n\tinputWrapper.appendChild(input);\n\tcontent.appendChild(inputWrapper);\n\tcontent.addEventListener('mouseover', () => {\n\t\tlet sidebar = document.querySelector('.sidebar');\n\t\tif (sidebar != null)\n\t\t\tsidebar.remove();\n\t});\n\n\tdocument.body.appendChild(content);\n}\n\nfunction displayMyWeek()\n{\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\t\n\tdocument.body.appendChild(content);\n}\n\nfunction displayMyTasks() {\t\n\tconst previousContent = document.querySelector(\"#content\");\n\tif (previousContent != null)\n\t\tpreviousContent.remove();\n\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\t\n\tdocument.body.appendChild(content);\n}\n\nfunction removeUserList(e) {\n\tconst target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;\n\n\tfor(let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__.userFolders.length; i++)\n\t{\n\t\tif (_data_js__WEBPACK_IMPORTED_MODULE_0__.userFolders[i].title == target)\n\t\t{\n\t\t\t_data_js__WEBPACK_IMPORTED_MODULE_0__.userFolders.splice(i, 1);\n\t\t\te.currentTarget.parentElement.remove();\n\t\t\tbreak;\n\t\t}\n\t}\n}\n\nfunction addFolder() {\n\tconst folderName = document.querySelector('#list-name').value;\n\tif (folderName != '')\n\t{\n\t\t_data_js__WEBPACK_IMPORTED_MODULE_0__.userFolders.push(\n\t\t{\n\t\t\t\"title\": folderName,\n\t\t\t\"iconClass\": \"\",\n\t\t\t\"files\": \"0\",\n\t\t});\n\t\tdocument.querySelector('.sidebar').remove();\n\t\tdisplaySidebar();\n\t\tremoveForm();\n\t}\n}\n\nfunction removeForm() {\n\tconst form = document.querySelector('form');\n\tif(form != null)\n\t\tform.remove();\n}\n\nfunction displayListForm() {\n\tif (document.querySelector('#list-form') == null)\n\t{\n\t\tconst listForm = new _data_js__WEBPACK_IMPORTED_MODULE_0__.ListForm();\n\t\tdocument.body.appendChild(listForm.form);\n\t}\n}\n\nfunction displaySidebar() {\n\tif (document.querySelector('.sidebar') == null)\n\t{\n\t\tconst sidebar = new _data_js__WEBPACK_IMPORTED_MODULE_0__.Sidebar(_data_js__WEBPACK_IMPORTED_MODULE_0__.defaultFolders, _data_js__WEBPACK_IMPORTED_MODULE_0__.userFolders);\n\t\tdocument.body.appendChild(sidebar.wrapper);\n\t}\n}\n\nfunction getTasks() {\n\tlet taskList = [];\n\tlet sortedTasks = getSortedTasks();\n\tsortedTasks.forEach(task => {\n\t\ttaskList.push(new _data_js__WEBPACK_IMPORTED_MODULE_0__.Task(task));\n\t});\n\treturn taskList;\n};\n\nfunction getSortedTasks() {\n\tlet a = _data_js__WEBPACK_IMPORTED_MODULE_0__.tasks;\n\tlet nTasks = a.length;\n\tlet i, j;\n\n\tfor (i = 0; i < nTasks; i++)\n\t{\n\t\tfor(j = i+1; j < nTasks; j++)\n\t\t{\n\t\t\tif (shouldSwap(a[i], a[j]))\n\t\t\t\tswap(a[i], a[j]);\n\t\t}\n\t}\n\treturn a;\n};\n\nfunction swap(a, b)\n{\n\tlet temp = '';\n\n\ttemp = a.title;\n\ta.title = b.title;\n\tb.title = temp;\n\n\ttemp = a.description;\n\ta.description = b.description;\n\tb.description = temp;\n\n\ttemp = a.dueDate;\n\ta.dueDate = b.dueDate;\n\tb.dueDate = temp;\n\n\ttemp = a.priority;\n\ta.priority = b.priority;\n\tb.priority = temp;\n\n\ttemp = a.notes;\n\ta.notes = b.notes;\n\tb.notes = temp;\n\n\ttemp = a.checklist;\n\ta.checklist = b.checklist;\n\tb.checklist = temp;\n}\n\nfunction shouldSwap(first, second) {\n\t// Compare the time of both and return true if a is scheduled later than b\n\tlet a = first.dueDate;\n\tlet b = second.dueDate;\n\tlet timeA = (a.split(' ')[1] == 'PM') ? Number(a.split(' ')[0].split(':').join('')) + 1200 : Number(a.split(' ')[0].split(':').join(''));\n\n\tlet timeB = (b.split(' ')[1] == 'PM') ? Number(b.split(' ')[0].split(':').join('')) + 1200 : Number(b.split(' ')[0].split(':').join(''));\n\n\treturn timeA > timeB;\n}\n\nfunction getDayStatus() {\n\treturn \"You have no event scheduled for today\";\n}\n\nfunction getDate() {\t\n\tconst d = new Date().toDateString().split(' ').splice(0,3);\n\treturn {\n\t\t\"day\": d[0],\n\t\t\"number\": Number(d[2]),\n\t\t\"month\": d[1],\n\t};\n}\n\nfunction getDailyQuote(quotes) {\n    const quoteIndex = Math.floor(Math.random() * quotes.length);\n\treturn quotes[quoteIndex];\n}\n\nfunction getWelcomeMessage() {\n\treturn `Good ${getPeriodOfTheDay()}, ${getUsername()}`;\n};\n\n\nfunction getPeriodOfTheDay() {\n\tconst localeDate = new Date();\n\tconst localeTime = localeDate.toLocaleTimeString(undefined, {\n\t\thour: '2-digit',\n\t\tminute: '2-digit',\n\t\tsecond: '2-digit',\n\t});\n\n\tlet period = localeTime.split(' ')[1] \n\n\tif (period ==  \"AM\")\n\t\treturn \"morning\";\n\telse if (Number(localeTime.split(':')[0]) < 8)\n\t\treturn \"afternoon\";\n\telse\n\t\treturn \"night\";\n}\n\n\nfunction getUsername() {\n\treturn \"Neil\";\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

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