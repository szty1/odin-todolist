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
      <li><a href="#"><i class="fa-solid fa-list-check"></i> All</a></li>
      <li><a href="#"><i class="fa-solid fa-calendar-day"></i> Today</a></li>
      <li><a href="#"><i class="fa-solid fa-calendar-week"></i> This Week</a></li>
    </ul>
    <h3>Projects</h3>
    <ul class="projects">
    </ul>
    <div class="addproject">
    <a href="#"><i class="fa-solid fa-plus"></i> Add Project</a>
    </div>

    `;

    Display.updateProjects();
  }

  static loadTasks() {
    
  }

  static loadFooter() {
    
  }

  static updateProjects() {
    const projectsContainer = document.querySelector('.projects');

    const projects = TodoList.getProjects();
    projects.forEach((project) => {
      projectsContainer.innerHTML += `<li><a href="#">${project.name}</a></li>`
    })
  }
}