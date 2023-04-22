import Main from './main';
import '../styles/style.css';

export default class Display {

  static currentid= 0;

  static loadPage() {
    Display.loadPageSkeleton();
    Display.loadHeader();
    Display.loadSidebar();
    Display.loadTasks(Display.currentid);
    Display.loadFooter();
    Display.addListeners();
  }

  // content loaders

  static loadPageSkeleton() {
    const content = document.querySelector('.content');

    content.innerHTML = `
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="tasks">
      <div class="tasklist"></div>
    </div>
    <div class="footer"></div>
    `;
  }

  static loadHeader() {
    const header = document.querySelector('.header');

    header.innerHTML = `
    <span class="logo"><i class="fa-regular fa-calendar-check"></i> TODOLIST</span>
    <ul>
      <li><a href="#" class="addtask"><i class="fa-solid fa-plus"></i> Add Task</a></li>
      <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i> Find Task</a></li>
    </ul>
    `;
  }

  static loadSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.innerHTML = `
    <ul>
      <li><a href="#" class="listall" data-id="0"><i class="fa-solid fa-list-check"></i> All Tasks</a></li>
      <li><a href="#" class="listtoday" data-id="1"><i class="fa-solid fa-calendar-day"></i> Due Today</a></li>
      <li><a href="#" class="listweek" data-id="2"><i class="fa-solid fa-calendar-week"></i> Due This Week</a></li>
    </ul>
    <div class="projectsheader">
    <span>Projects</span>
    <a href="#" class="addproject"><i class="fa-solid fa-plus"></i></a>
    </div>
    <ul class="projects">
    </ul>
    `;

    Display.updateProjects();
  }

  static loadTask(task) {
    const tasklist = document.querySelector('.tasklist');

    const completedIcon = task.completed ? "fa-circle-check" : "fa-circle";
    tasklist.innerHTML += `
    <div class="task">
      <div class="checkbox">
        <a href="#" class="completetask" data-id="${task.id}"><i class="fa-regular ${completedIcon}"></i></a>
      </div>
      <div class="data">
        <p class="title">${task.title}</p>
        <p class="description">${task.description}</p>
        <p class="duedate">${task.getFormattedDate()}</p>
      </div>
      <div class="buttons">
        <a href="#" class="edittaks" data-id="${task.id}"><i class="fa-regular fa-pen-to-square"></i></a>
        <a href="#" class="deletetask" data-id="${task.id}"><i class="fa-regular fa-trash-can"></i></a>
      </div>
    </div>
  ` 
  } 

  static loadTasks(id) {
    console.log(id);
    let tasks;

    if (id == 1) {
      tasks = Main.todolist.getTodayTasksArray();
    } else if (id == 2) {
      tasks = Main.todolist.getWeekTasksArray();
    } else if (id > 2 && Main.todolist.getProject(id)) {
      tasks = Main.todolist.getProjectTasksArray(id);
    } else {
      tasks = Main.todolist.getTasksArray();
    }

    Display.currentid = id;

    Display.clearTasks();
    tasks.forEach(task => Display.loadTask(task));
    Display.addTaskListeners();
  }

  static loadFooter() {
    const footer = document.querySelector('.footer');

    footer.innerHTML = `
    <span><i class="fa-regular fa-calendar-check"></i> TODOLIST by szty1 for Odin Project</span>
    `;
  }

  static updateProjects() {
    const projectsContainer = document.querySelector('.projects');

    const projects = Main.todolist.getProjectsArray();
    projects.forEach((project) => {
      if (project.id > 2) {
        projectsContainer.innerHTML += `<li><a href="#" class="listproject" data-name="${project.name}"><i class="fa-solid fa-folder-open"></i> ${project.name}</a><a href="#" class="deleteproject" data-name="${project.name}"><i class="fa-solid fa-xmark"></i></a></li>`
      }
    });
  }

  static clearTasks() {
    const tasks = document.querySelector('.tasklist');
    tasks.innerHTML = "";
  }

  // input handlers

  static handleLoadTask(e) {
    Display.loadTasks(this.dataset.id);
  }

  static completeTask(e) {
    Main.todolist.getTask(Number(this.dataset.id)).toggleCompleted();
    Display.loadTasks(Display.currentid);
  }

  static editTask(e) {
    
  }

  static deleteTask(e) {
    Main.todolist.deleteTask(Number(this.dataset.id));
    Display.loadTasks(Display.currentid);
  }


  // add event listeners

  static addListeners() {
    const listall = document.querySelector('.listall');
    const listtoday = document.querySelector('.listtoday');
    const listweek= document.querySelector('.listweek');
    const addproject = document.querySelector('.addproject');

    listall.addEventListener('click', Display.handleLoadTask);
    listtoday.addEventListener('click', Display.handleLoadTask);
    listweek.addEventListener('click', Display.handleLoadTask);
  }

  static addTaskListeners() {
    const completetasks = document.querySelectorAll('.completetask');
    const edittasks = document.querySelectorAll('.edittask');
    const deletetasks = document.querySelectorAll('.deletetask');

    completetasks.forEach((btn) => btn.addEventListener('click', Display.completeTask));
    edittasks.forEach((btn) => btn.addEventListener('click', Display.editTask));
    deletetasks.forEach((btn) => btn.addEventListener('click', Display.deleteTask));
  }
}