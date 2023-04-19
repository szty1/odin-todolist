import TodoList from './todolist';
import '../styles/style.css';

export default class Display {

  static loadPage() {
    Display.loadPageSkeleton();
    Display.loadHeader();
    Display.loadSidebar();
    Display.loadTasks();
    Display.loadFooter();
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
      <li><a href="#"><i class="fa-solid fa-plus"></i> Add Task</a></li>
      <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i> Find Task</a></li>
    </ul>
    `;
  }

  static loadSidebar() {
    const sidebar = document.querySelector('.sidebar');

    sidebar.innerHTML = `
    <ul>
      <li><a href="#"><i class="fa-solid fa-list-check"></i> All Tasks</a></li>
      <li><a href="#"><i class="fa-solid fa-calendar-day"></i> Due Today</a></li>
      <li><a href="#"><i class="fa-solid fa-calendar-week"></i> Due This Week</a></li>
    </ul>
    <div class="projectsheader">
    <span>Projects</span>
    <a href="#"><i class="fa-solid fa-plus"></i> Add</a>
    </div>
    <ul class="projects">
    </ul>
    `;

    Display.updateProjects();
  }

  static loadTasks() {
    
  }

  static loadFooter() {
    const footer = document.querySelector('.footer');

    footer.innerHTML = `
    <span>TODOLIST by szty1 for Odin Project</span>
    `;
  }

  static updateProjects() {
    const projectsContainer = document.querySelector('.projects');

    const projects = TodoList.getProjects();
    projects.forEach((project) => {
      projectsContainer.innerHTML += `<li><a href="#"><i class="fa-solid fa-folder"></i> ${project.name}</a></li>`
    })
  }
}