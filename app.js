// Local Storage

// Task Controler
const TaskCtrl = (function () {
  // Item constructor
  const Task = function (id, task) {
    this.id = id;
    this.task = task;
  };

  // data Structure
  const data = {
    tasks: [
      { id: 0, task: "Wake up and read for about a hour" },
      { id: 1, task: "Go for a walk in the evening for a hour" },
      { id: 2, task: "Lean some new words in German on Duolingo" },
      { id: 3, task: "Check out Khan Academy for some lessons on Maths" },
    ],
  };

  // Public
  return {
    // To retrieve data for use in other controlers
    getTasks: function () {
      return data.tasks;
    },
    // To log data in Console
    logData: function () {
      return data;
    },
  };
})();
// UI controler
const UICtrl = (function () {
  UISelectors = {
    tasksList: ".tasks__list",
  };

  // Public
  return {
    populateList: function (tasks) {
      let html = ``;
      tasks.forEach(function (task) {
        html += `<li class="tasks__item">
        <span class="id">${task.id + 1})</span>
        ${task.task}
        <a href="#" class="tasks__link"> &times; </a>
      </li>`;
      });
      const list = document.querySelector(UISelectors.tasksList);
      list.innerHTML = html;
    },
  };
})();
// Application controler
const AppCtrl = (function (TaskCtrl, UICtrl) {
  // Get the tasks
  const tasks = TaskCtrl.getTasks();

  // Populate the Page
  UICtrl.populateList(tasks);
  // Init APP
  return {
    init: function () {},
  };
})(TaskCtrl, UICtrl);
// Initialization
AppCtrl.init();
