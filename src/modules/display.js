import Main from './main';
import '../styles/style.css';

export default class Display {

  static currentid= '0';

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
    <div class="modal"></div>
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
    <div class="addprojectform">
      <form id="addproject" method="get" action="#">
        <input type="text" name="projectname" placeholder="Project Name">
        <button class="confirm">Add Project</button>
        <button class="cancel">Cancel</button>
      </form>
    </div>
    <ul class="projects">
    </ul>
    `;

    Display.updateProjects();
  }

  static loadTask(task) {
    const tasklist = document.querySelector('.tasklist');

    const importantIcon = task.getImportant() ? "fa-solid fa-star" : "fa-regular fa-star";
    const completedIcon = task.getCompleted() ? "fa-circle-check" : "fa-circle";
    const important = task.getImportant() ? `<span class="priority"><i class="fa-solid fa-star"></i> Important</span>` : "";
    let inProject = "";
    if (Main.todolist.getTaskProjectName(task.id)) {
      inProject = `
      <span class="project"><i class="fa-solid fa-folder-open"></i> ${Main.todolist.getTaskProjectName(task.id)}</span>
      `;
    }
    const completedClass = task.getCompleted() ? " completed" : "";
    const importantClass = task.getImportant() ? " important" : "";
    tasklist.innerHTML += `
    <div class="task${importantClass}">
      <div class="checkbox">
        <a href="#" class="completetask" data-id="${task.id}"><i class="fa-regular ${completedIcon}"></i></a>
      </div>
      <div class="data">
        <p class="title${completedClass}">${task.title}</p>
        <p class="description${completedClass}">${task.description}</p>
        <div class="taskdata">
          <span class="duedate"><i class="fa-regular fa-calendar"></i> ${task.getFormattedDate()}</span>
          ${inProject}
          ${important}
        </div>
      </div>
      <div class="buttons">
        <a href="#" class="toggleimportant" data-id="${task.id}"><i class="${importantIcon}"></i></a>
        <a href="#" class="edittask" data-id="${task.id}"><i class="fa-regular fa-pen-to-square"></i></a>
        <a href="#" class="deletetask" data-id="${task.id}"><i class="fa-regular fa-trash-can"></i></a>
      </div>
    </div>
  ` 
  } 

  static loadTasks(id) {
    const taskscontainer = document.querySelector('.tasklist');
    let tasks;

    if (id == '1') {
      tasks = Main.todolist.getTodayTasks();
    } else if (id == '2') {
      tasks = Main.todolist.getWeekTasks();
    } else if (id > 2 && Main.todolist.hasProject(id)) {
      tasks = Main.todolist.getTasksInProject(id);
    } else {
      tasks = Main.todolist.getTasks();
    }

    Display.currentid = id;

    Display.clearTasks();
    taskscontainer.innerHTML = `<h3>${Main.todolist.getProject(Display.currentid).getName()}</h3>`;
  
    tasks.forEach(task => Display.loadTask(task));
  
    taskscontainer.innerHTML += `<a href="#" class="addtask"><i class="fa-solid fa-plus"></i> Add Task</a>`;

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

    const projects = Main.todolist.getProjects();

    Display.clearProjects();

    projects.forEach((project) => {
      if (project.id > 2) {
        projectsContainer.innerHTML += `
        <li>
        <a href="#" class="listproject" data-id="${project.id}"><i class="fa-solid fa-folder-open"></i> ${project.name}</a>
        <a href="#" class="deleteproject" data-id="${project.id}"><i class="fa-solid fa-xmark"></i></a>
        </li>`
      }
    });

    Display.addProjectListeners() 
  }

  static clearTasks() {
    const tasks = document.querySelector('.tasklist');
    tasks.innerHTML = "";
  }

  static clearProjects() {
    const projects = document.querySelector('.projects');
    projects.innerHTML = "";
  }

  static loadAddTaskModal(project) {
    const modal = document.querySelector('.modal');

    modal.innerHTML = `
      <div class="add">
        <form id="addtask" action="#" method="get">
          <h3>Add Task</h3>
          <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required>
          </div>
          <div>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" required>
          </div>
          <div>
            <label for="duedate">Due Date</label>
            <input type="date" name="duedate" id="duedate" required>
          </div>
          <div>
            <label for="project">Project</label>
            <select name="project" id="project">
              ${Display.listProjects(project.id)}
            </select>
          </div>
          <button type="button" class="confirm">Add Task</button>
          <button type="button" class="cancel">Cancel</button>
        </form>
      </div>
    `;

    Display.addAddModalListeners();
    modal.classList.add('visible');
  }

  static loadEditTaskModal(task) {
    const modal = document.querySelector('.modal');

    modal.innerHTML = `
      <div class="add">
        <form id="edittask" action="#" method="get">
          <h3>Edit Task</h3>
          <input type="hidden" name="taskid" id="taskid" value="${task.id}">
          <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="${task.getTitle()}" required>
          </div>
          <div>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" value="${task.getDescription()}" required>
          </div>
          <div>
            <label for="duedate">Due Date</label>
            <input type="date" name="duedate" id="duedate" value="${task.getDueDateYYYYMMDD()}" required>
          </div>
          <div>
            <label for="project">Project</label>
            <select name="project" id="project">
              ${Display.listProjects(task.getProject())}
            </select>
          </div>
          <button type="button" class="confirm">Update Task</button>
          <button type="button" class="cancel">Cancel</button>
        </form>
      </div>
    `;

    Display.addEditModalListeners();
    modal.classList.add('visible');
  }

  static listProjects(selectedId) {
    let options = `<option value="-1">None</option>`;
    Main.todolist.getCustomProjects().forEach((project) => {
      options += `<option value="${project.id}" ${(project.id == selectedId) ? 'selected' : ''}>${project.getName()}</option>`;
    });
    return options;
  }

  // input handlers

  static handleLoadTask(e) {
    Display.loadTasks(this.dataset.id);
  }

  static addTask(e) {
    Display.loadAddTaskModal(Display.currentid);
  }

  static toggleCompleted(e) {
    Main.todolist.toggleCompleted(this.dataset.id);
    Display.loadTasks(Display.currentid);
  }

  static toggleImportant(e) {
    Main.todolist.toggleImportant(this.dataset.id);
    Display.loadTasks(Display.currentid);
  }

  static editTask(e) {
    Display.loadEditTaskModal(Main.todolist.getTask(this.dataset.id));
  }

  static deleteTask(e) {
    Main.todolist.deleteTask(this.dataset.id);
    Display.loadTasks(Display.currentid);
  }

  static deleteProject(e) {
    Main.todolist.deleteProject(this.dataset.id);
    Display.updateProjects();
    Display.loadTasks(Display.currentid);
  }

  static showAddProjectForm(e) {
    const addprojectform = document.querySelector('.addprojectform');
    addprojectform.classList.add('visible');
  }

  static hideAddProjectForm(e) {
    const form = document.getElementById("addproject");
    form.reset();
    const addprojectform = document.querySelector('.addprojectform');
    addprojectform.classList.remove('visible');
  }

  static handleAddProjectForm(e) {
    const form = document.getElementById("addproject");
    if (form.projectname.value != null) {
      Main.todolist.createNewProject(form.projectname.value);
      Display.hideAddProjectForm();
      Display.updateProjects();
    } 
  }

  static handleAddTaskForm(e) {
    const form = document.getElementById("addtask");
    Main.todolist.addNewTask(form);
    Display.hideModal();
    Display.loadTasks(Display.currentid);
  }

  static handleEditTaskForm(e) {
    const form = document.getElementById("edittask");
    Main.todolist.updateTask(form);
    Display.hideModal();
    Display.loadTasks(Display.currentid);
  }

  static hideModal(e) {
    const modal = document.querySelector('.modal');
    modal.classList.remove('visible');
  }


  // add event listeners

  static addListeners() {
    const listall = document.querySelector('.listall');
    const listtoday = document.querySelector('.listtoday');
    const listweek= document.querySelector('.listweek');
    const addproject = document.querySelector('.addproject');
    const confirmaddproject = document.querySelector('.addprojectform .confirm');
    const canceladdproject = document.querySelector('.addprojectform .cancel');
    const addtask = document.querySelector('.header .addtask');

    listall.addEventListener('click', Display.handleLoadTask);
    listtoday.addEventListener('click', Display.handleLoadTask);
    listweek.addEventListener('click', Display.handleLoadTask);
    addproject.addEventListener('click', Display.showAddProjectForm);
    confirmaddproject.addEventListener('click', Display.handleAddProjectForm);
    canceladdproject.addEventListener('click', Display.hideAddProjectForm);
    addtask.addEventListener('click', Display.addTask);
  }

  static addProjectListeners() {
    const listproject = document.querySelectorAll('.listproject');
    const deleteproject = document.querySelectorAll('.deleteproject');

    listproject.forEach((btn) => btn.addEventListener('click', Display.handleLoadTask));
    deleteproject.forEach((btn) => btn.addEventListener('click', Display.deleteProject));
  }

  static addTaskListeners() {
    const completetasks = document.querySelectorAll('.completetask');
    const importantbtns = document.querySelectorAll('.toggleimportant');
    const edittasks = document.querySelectorAll('.edittask');
    const deletetasks = document.querySelectorAll('.deletetask');

    completetasks.forEach((btn) => btn.addEventListener('click', Display.toggleCompleted));
    importantbtns.forEach((btn) => btn.addEventListener('click', Display.toggleImportant));
    edittasks.forEach((btn) => btn.addEventListener('click', Display.editTask));
    deletetasks.forEach((btn) => btn.addEventListener('click', Display.deleteTask));
  }

  static addAddModalListeners() {
    const confirmtask = document.querySelector('.add .confirm');
    const canceltask = document.querySelector('.add .cancel');

    confirmtask.addEventListener('click', Display.handleAddTaskForm);
    canceltask.addEventListener('click', Display.hideModal);
  }

  static addEditModalListeners() {
    const confirmtask = document.querySelector('.add .confirm');
    const canceltask = document.querySelector('.add .cancel');
    

    confirmtask.addEventListener('click', Display.handleEditTaskForm);
    canceltask.addEventListener('click', Display.hideModal);
  }
}