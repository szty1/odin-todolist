import Main from './main';
import '../styles/style.css';

export default class Display {

  static loadPage() {
    Display.loadPageSkeleton();
    Display.loadHeader();
    Display.loadSidebar();
    Display.loadTasksAll();
    Display.loadFooter();
    Display.addListeners();
  }

  static loadPageSkeleton() {
    const content = document.querySelector('.content');

    content.innerHTML = `
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="tasks"></div>
    <div class="footer"></div>
    `;
  }

  static loadHeader() {
    const header = document.querySelector('.header');

    header.innerHTML = `
    <span class="logo">TODOLIST</span>
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
      <li><a href="#" class="listall"><i class="fa-solid fa-list-check"></i> All Tasks</a></li>
      <li><a href="#" class="listtoday"><i class="fa-solid fa-calendar-day"></i> Due Today</a></li>
      <li><a href="#" class="listweek"><i class="fa-solid fa-calendar-week"></i> Due This Week</a></li>
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
    const tasks = document.querySelector('.tasks');

    tasks.innerHTML += `
    <div class="task">
      <span class="title">${task.title}</span>
      <span class="title">${task.description}</span>
      <span class="title">${task.getFormattedDate()}</span>
      <span class="title">Priority: ${task.priority}</span>
    </div>
  `
  }

  static clearTasks() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = "";
  }

  static loadTasksAll() {
    Display.clearTasks();

    const tasks = Main.todolist.getProject('All').getTasks();
    tasks.forEach((task) => {
      Display.loadTask(task);
    })
  }

  static loadTasksToday() {
    Display.clearTasks();

    const tasks = Main.todolist.getProject('All').getTodaysTasks();
    tasks.forEach((task) => {
      Display.loadTask(task);
    })
  }

  static loadTasksWeek() {
    Display.clearTasks();

    const tasks = Main.todolist.getProject('All').getThisWeeksTasks();
    tasks.forEach((task) => {
      Display.loadTask(task);
    })
  }

  static loadTasksProject(name) {

  }

  static loadFooter() {
    const footer = document.querySelector('.footer');

    footer.innerHTML = `
    <span>TODOLIST by szty1 for Odin Project</span>
    `;
  }

  static updateProjects() {
    const projectsContainer = document.querySelector('.projects');

    const projects = Main.todolist.getProjects();
    projects.forEach((project) => {
      if (project.name !== 'All') {
        projectsContainer.innerHTML += `<li><a href="#" class="listproject" data-name="${project.name}"><i class="fa-solid fa-folder-open"></i> ${project.name}</a><a href="#" class="deleteproject" data-name="${project.name}"><i class="fa-solid fa-xmark"></i></a></li>`
      }
    });
  }

  static addListeners() {
    const listall = document.querySelector('.listall');
    const listtoday = document.querySelector('.listtoday');
    const listweek= document.querySelector('.listweek');
    const addproject = document.querySelector('.addproject');

    listall.addEventListener('click', Display.loadTasksAll);
    listtoday.addEventListener('click', Display.loadTasksToday);
    listweek.addEventListener('click', Display.loadTasksWeek);


  }
}